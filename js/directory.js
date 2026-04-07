async function loadDirectoryData() {
  try {
    const response = await fetch('data/listings.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Data file not found');
    const payload = await response.json();
    return Array.isArray(payload) ? payload : (payload.listings || []);
  } catch (error) {
    return [];
  }
}

function parseQuery() {
  return new URLSearchParams(window.location.search);
}

function normalize(value) {
  return String(value || '').trim().toLowerCase();
}

function listingMatches(listing, filters) {
  if (filters.city && normalize(listing.city) !== filters.city) return false;
  if (filters.suburb && !normalize(listing.suburb).includes(filters.suburb)) return false;
  if (filters.category && normalize(listing.category) !== filters.category) return false;
  if (filters.price_band && normalize(listing.price_band) !== filters.price_band) return false;
  if (filters.booking_style && normalize(listing.booking_style) !== filters.booking_style) return false;
  return true;
}

function listingCard(listing) {
  const href = 'listing-template.html?id=' + encodeURIComponent(listing.id || '');
  const name = listing.name || 'Unnamed listing';
  const suburb = listing.suburb || 'suburb not set';
  const city = listing.city || 'city not set';
  const category = listing.category || 'category not set';
  const priceBand = listing.price_band || 'unspecified';
  const bookingStyle = listing.booking_style || 'unspecified';
  const summary = listing.description_short || 'Listing summary not populated yet.';

  return `
<article class="card listing-card"><h3><a href="${href}">${name}</a></h3><p class="small">${city} / ${suburb}</p><p>${summary}</p><div class="badge-row"><span class="badge">${category}</span><span class="badge">${priceBand}</span><span class="badge">${bookingStyle}</span></div><a class="btn btn-secondary" href="${href}">View listing</a></article>`;
}

function applyFiltersToForm(form, params) {
  ['city', 'suburb', 'category', 'price_band', 'booking_style'].forEach((key) => {
    if (params.get(key) && form.elements[key]) {
      form.elements[key].value = params.get(key);
    }
  });
}

function collectFilters(form) {
  return {
    city: normalize(form.elements.city?.value),
    suburb: normalize(form.elements.suburb?.value),
    category: normalize(form.elements.category?.value),
    price_band: normalize(form.elements.price_band?.value),
    booking_style: normalize(form.elements.booking_style?.value)
  };
}

function writeQuery(filters) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => { if (value) params.set(key, value); });
  const query = params.toString();
  const newUrl = query ? `${window.location.pathname}?${query}` : window.location.pathname;
  window.history.replaceState({}, '', newUrl);
}

function renderListingTemplate(listing) {
  const summaryEl = document.getElementById('listing-summary');
  if (!summaryEl) return;
  const nameEl = document.getElementById('listing-name');
  const metaEl = document.getElementById('listing-meta');
  const descEl = document.getElementById('listing-description');
  const bookingEl = document.getElementById('listing-booking');
  const sourceEl = document.getElementById('listing-source');
  const actionsEl = document.getElementById('listing-actions');

  if (!listing) {
    summaryEl.textContent = 'Listing ID not found in data/listings.json.';
    return;
  }

  nameEl.textContent = listing.name || 'Unnamed listing';
  summaryEl.textContent = listing.description_short || 'Summary not populated.';
  descEl.textContent = listing.description_short || '[NEEDS INPUT]';
  metaEl.innerHTML = [listing.city, listing.suburb, listing.category, listing.price_band].filter(Boolean).map((x) => `<span class="badge">${x}</span>`).join('');
  bookingEl.innerHTML = [`Booking style: ${listing.booking_style || 'unspecified'}`, `Phone: ${listing.phone || 'not listed'}`, `Email: ${listing.email || 'not listed'}`, `Hours: ${listing.hours_summary || 'not listed'}`].map((x) => `<li>${x}</li>`).join('');
  sourceEl.innerHTML = [`Source URL: ${listing.source_url || 'not listed'}`, `Last verified: ${listing.source_checked_date || 'not listed'}`, `Claim status: ${listing.claim_status || 'unclaimed'}`].map((x) => `<li>${x}</li>`).join('');
  const website = listing.website_url ? `<a class="btn btn-primary" href="${listing.website_url}" target="_blank" rel="noopener">Visit website</a>` : '';
  actionsEl.innerHTML = website + '<a class="btn btn-secondary" href="claim-listing.html">Claim or update listing</a>';
}

async function initListingsPage() {
  const form = document.getElementById('listing-filters');
  if (!form) return;
  const data = await loadDirectoryData();
  const params = parseQuery();
  applyFiltersToForm(form, params);
  const countEl = document.getElementById('results-count');
  const gridEl = document.getElementById('listings-grid');
  const emptyEl = document.getElementById('empty-state');

  const render = () => {
    const filters = collectFilters(form);
    writeQuery(filters);
    const rows = data.filter((listing) => listingMatches(listing, filters));
    gridEl.innerHTML = rows.map(listingCard).join('');
    countEl.textContent = `${rows.length} listing(s) shown`;
    emptyEl.hidden = rows.length > 0;
  };

  form.addEventListener('submit', (event) => { event.preventDefault(); render(); });
  document.getElementById('reset-filters')?.addEventListener('click', () => { form.reset(); render(); });
  render();
}

async function initListingTemplatePage() {
  if (!document.querySelector('[data-page="listing-template"]')) return;
  const data = await loadDirectoryData();
  const id = parseQuery().get('id');
  renderListingTemplate(data.find((row) => row.id === id));
}

document.addEventListener('DOMContentLoaded', async () => {
  await initListingsPage();
  await initListingTemplatePage();
});
