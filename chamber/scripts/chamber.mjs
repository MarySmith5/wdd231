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

// ********** Directory js ************

export async function getMemberDataGrid(cards) {
    const response = await fetch('https://marysmith5.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    const members = data.members;
    members.sort((a, b) => b.level - a.level);
    displayMembersGrid(members, cards);
}

export async function getMemberDataList(cards) {
    const response = await fetch('https://marysmith5.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    const members = data.members;
    members.sort((a, b) => b.level - a.level);
    displayMembersList(members, cards);
}

const displayMembersGrid = (members, cards) => {
    cards.replaceChildren();
    cards.classList.remove('list'); 
    cards.classList.add('grid');
    members.forEach((member) => {
        let card = createCard(member);
        cards.appendChild(card);
    })
}

function createCard(member) {
    let card = document.createElement('section');
    let nameDiv = document.createElement('div');
    let businessName = document.createElement('h2');
    let level = document.createElement('p');
    let picture = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('a');
    let lowerDiv = document.createElement('div');
    let infoDiv = document.createElement('div');
    infoDiv.setAttribute('class', 'infoDiv');
    lowerDiv.setAttribute('class', 'lowerDiv');
    nameDiv.setAttribute('class', 'nameDiv');

    picture.setAttribute('src', member.image);
    picture.setAttribute('alt', `Image of  ${member.name}`);
    picture.setAttribute('loading', 'lazy');
    picture.setAttribute('width', '340');
    picture.setAttribute('height', 'auto');

    url.setAttribute('href', member.url);
    url.setAttribute('target', '_blank');

    businessName.textContent = `${member.name}`;
    address.innerHTML = `<strong>Address:</strong> ${member.address}`;
    phone.innerHTML = `<strong>Phone:</strong> ${member.phone}`;
    url.textContent = "Website"
    nameDiv.appendChild(businessName);
    if (member.level == 2) {
        level.innerHTML = `<i>Silver Member</i>`;
        nameDiv.appendChild(level);
    }
    if (member.level == 3) {
        level.innerHTML = `<i>Gold Member</i>`;
        nameDiv.appendChild(level);
    }

    card.appendChild(nameDiv);
    infoDiv.appendChild(address);
    infoDiv.appendChild(phone);
    infoDiv.appendChild(url);
    lowerDiv.appendChild(picture);
    lowerDiv.appendChild(infoDiv);
    card.appendChild(lowerDiv);
    return card;
}

const displayMembersList = (members, cards) => {
    cards.replaceChildren();
    cards.classList.remove('grid');
    cards.classList.add('list');
    members.forEach((member) => {
        let card = document.createElement('section');
        card.setAttribute('class', 'list')
        let businessName = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');

        url.setAttribute('href', member.url);
        url.setAttribute('target', '_blank');

        businessName.textContent = `${member.name}`;
        address.textContent =  `${member.address}`;
        phone.textContent = `${member.phone}`;
        url.textContent = "Website"

        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        cards.appendChild(card);
    })
}


// ********* HOME PAGE **********


export async function getSpotlightCards(spotlight) {
    const response = await fetch('https://marysmith5.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    const members = data.members;
    const filteredMembers = members.filter((a) => a.level > 1);
    const shuffled = filteredMembers.sort(() => 0.5 - Math.random());
    const spotlightMembers = shuffled.slice(0, 2); 
    console.log(shuffled);
    displaySpotlights(spotlightMembers, spotlight);
}

const displaySpotlights = (members, spotlight) => { 
    members.forEach((member) => {
        let card = createCard(member);
        spotlight.appendChild(card);
    })
}
