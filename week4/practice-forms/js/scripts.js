const info = new URLSearchParams(window.location.search);
const results = document.querySelector('#results');

results.innerHTML = `
<p>Appointment for ${info.get('first')} ${info.get('last')}</p>
<p>Proxy ${info.get('ordinance')} on ${info.get('date')} at ${info.get('location')} Temple.</p>
<p>Your phone: ${info.get('phone')}</p>
<p>Your email: ${info.get('email')}`;





// http://127.0.0.1:65342/week4/practice-forms/thanks.html?first=Mary&last=Smith&phone=17192142929&email=mary.sunshine4%40gmail.com&ordinance=Baptism&date=2026-07-30&location=Payson