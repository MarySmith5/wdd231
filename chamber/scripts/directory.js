const cards = document.querySelector('.cards');

async function getMemberData() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    console.table(data.displayMembers);
    displayMembers(data.displayMembers);
}



const displayMembers = (members) => {
    members.forEach((member) => {
        console.log(member);
        let card = document.createElement('section');
        let businessName = document.createElement('h2');
        let picture = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');

        picture.setAttribute('src', member.image);
        picture.setAttribute('alt', `Image of  ${member.name}`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '340');
        picture.setAttribute('height', 'auto');

        url.setAttribute('href', member.url);

        businessName.textContent = `${member.name}`;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        url.innerHTML = "Website"

        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(picture);

        cards.appendChild(card);
    })
}


getMemberData(); 