const info = new URLSearchParams(window.location.search);
const results = document.querySelector('#results');

results.innerHTML = `
<p>Membership level <strong>${info.get('level')}</strong> for ${info.get('businessName')}</p>
<strong>Contact Info:</strong>
<p>${info.get('firstName')} ${info.get('lastName')}</p>
<p>${info.get('orgTitle')}</p>
<p>${info.get('email')}</p>
<p>${info.get('mobileNum')}</p>
<p><strong>Submitted on: </strong>${info.get('timestamp')}</p>`;
