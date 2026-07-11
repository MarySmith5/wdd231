const cards = document.querySelector('.cards');
const gridbutton = document.querySelector("#grid-view");
const listbutton = document.querySelector("#list-view");

async function getMemberDataGrid() {
    const response = await fetch('https://marysmith5.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    displayMembersGrid(data.members);
}

async function getMemberDataList() {
    const response = await fetch('https://marysmith5.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    displayMembersList(data.members);
}

const displayMembersGrid = (members) => {
    cards.replaceChildren();
    cards.removeAttribute('id');
    cards.setAttribute('id', 'grid');
    members.forEach((member) => {
        let card = document.createElement('section');
        let businessName = document.createElement('h2');
        let picture = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        let lowerDiv = document.createElement('div');
        let infoDiv = document.createElement('div');
        infoDiv.setAttribute('class', 'infoDiv');
        lowerDiv.setAttribute('class', 'lowerDiv');

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


        card.appendChild(businessName);
        infoDiv.appendChild(address);
        infoDiv.appendChild(phone);
        infoDiv.appendChild(url);
        lowerDiv.appendChild(picture);
        lowerDiv.appendChild(infoDiv);
        card.appendChild(lowerDiv);

        cards.appendChild(card);
    })
}

gridbutton.addEventListener("click", () => {
    getMemberDataGrid();
});
listbutton.addEventListener("click", () => {
    getMemberDataList();
});

getMemberDataGrid(); 

const displayMembersList = (members) => {
    cards.replaceChildren();
    cards.removeAttribute('id');
    cards.setAttribute('id', 'list');
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