const info = new URLSearchParams(window.location.search);
const results = document.querySelector('#results');


// const utcSeconds = 1234567890;
// var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
// d.setUTCSeconds(utcSeconds);

results.innerHTML = `
<p>Membership level <strong>${info.get('level')}</strong> for ${info.get('businessName')}</p>
<strong>Contact Info:</strong>
<p>${info.get('firstName')} ${info.get('lastName')}</p>
<p>${info.get('orgTitle')}</p>
<p>${info.get('email')}</p>
<p>${info.get('mobileNum')}</p>
<p><strong>Submitted on: </strong>${info.get('timestamp')}</p>`;

// http://127.0.0.1:65342/chamber/thankyou.html?firstName=Mary&lastName=Smith&orgTitle=President&email=mary.sunshine4%40gmail.com&mobileNum=7192142929&businessName=Hairsmith+Inc.&businessDescription=beauty+salon&timetamp=1785002388281&level=silver
// http://127.0.0.1:65342/chamber/thankyou.html?firstName=Mary&lastName=Smith&orgTitle=Preident&email=mary.sunshine4%40gmail.com&mobileNum=2192142929&businessName=Hairsmith+Inc.&businessDescription=beauty+salon&timestamp=1785003840809&level=gold