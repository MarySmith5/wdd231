// ******** footer js *********
document.getElementById("lastModified").innerHTML = `Last Modification:  ${document.lastModified}`;
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();

// ********* navigation js **********
const navbutton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navLinks.classList.toggle('show');
});