/**
 * GA4 event helpers. gtag.js itself is loaded server-side (worker/ssr.tsx's GTAG_SNIPPET) with
 * send_page_view disabled — this is a client-routed SPA (wouter), so App.tsx's route listener
 * calls trackPageView on every navigation, including the first one, instead of relying on gtag's
 * automatic once-per-load page_view. Every call here is a no-op if gtag hasn't loaded yet (ad
 * blockers, slow network, SSR) rather than throwing — an analytics failure must never break the
 * page it's measuring.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") window.gtag(...args);
}

export function trackPageView(path: string) {
  gtag("event", "page_view", { page_path: path, page_location: typeof window !== "undefined" ? window.location.href : path, page_title: typeof document !== "undefined" ? document.title : undefined });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  gtag("event", name, params);
}
