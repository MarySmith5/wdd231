import { fun } from '../data/fun.mjs'
console.log(fun);

const discover = document.querySelector('#discover');

function displayCards(fun) {
    fun.forEach(place => {
        const card = document.createElement('div');
        const photo = document.createElement('img');
        photo.src = `images/${place.photo_url}`;
        photo.alt = place.name;
        console.log(place.name);
        card.appendChild(photo);
        const title = document.createElement('h2');
        title.textContent = place.name;
        card.appendChild(title);
        const address = document.createElement('address');
        address.textContent = place.address;
        card.appendChild(address);
        const desc = document.createElement('p');
        desc.textContent = place.description;
        card.appendChild(desc);

        discover.appendChild(card);
    })
}

displayCards(fun);