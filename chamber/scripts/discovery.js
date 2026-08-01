import { fun } from '../data/fun.mjs'
console.log(fun);

const discover = document.querySelector('#discover');
const welcome = document.querySelector('#welcome');

function displayCards(fun) {
    fun.forEach(place => {
        const card = document.createElement('div');
        const figure = document.createElement('figure');
        const photo = document.createElement('img');
        photo.src = `images/${place.photo_url}`;
        photo.alt = place.name;
        figure.appendChild(photo);
        card.appendChild(figure);
        const title = document.createElement('h3');
        title.textContent = place.name;
        card.appendChild(title);
        const address = document.createElement('address');
        address.innerHTML = `<span style="font-style: italic;">${place.address}</span>`;
        card.appendChild(address);
        const desc = document.createElement('p');
        desc.textContent = place.description;
        card.appendChild(desc);
        const learn = document.createElement('button');
        // learn.setAttribute('href', place.url);
        // learn.setAttribute('target', '_blank');
        learn.textContent = "Learn More";
        card.appendChild(learn);

        discover.appendChild(card);
    })
}

displayCards(fun);
displayWelcome();
localStorage.removeItem("lastVisit");
localStorage.setItem("lastVisit", Date.now());


function displayWelcome() {
    const message = document.createElement('h2');
    let lastVisit = localStorage.getItem("lastVisit");
    if (!lastVisit) {
        message.textContent = "Welcome! Let us know if you have any questions."
    } else {
        let numDays = (Date.now() - lastVisit) /
            86400000;
        console.log(numDays);
        if (numDays < 1) {
            message.textContent = "Back so soon! Awesome!";  
        } else {
            message.textContent = `You last visited ${numDays} days ago.`
        }
    }
    welcome.appendChild(message);
    
}

