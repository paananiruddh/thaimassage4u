
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('enquiryForm');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name')?.value?.trim() || '';
      const phone = document.getElementById('phone')?.value?.trim() || '';
      const service = document.getElementById('service')?.value || '';
      const message = document.getElementById('message')?.value?.trim() || '';
      const subject = encodeURIComponent('Booking enquiry from ' + name);
      const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'Service: ' + service + '\n' +
        'Preferred time: ' + message
      );
      window.location.href = 'mailto:hello@thaimassageforu.com?subject=' + subject + '&body=' + body;
    });
  }
});
