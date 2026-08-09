const cards = document.querySelector(".cards");
const catbutton = document.querySelector('#category');
const occultLink = document.querySelector("#occult");
const conspiracyLink = document.querySelector("#conspiracy");
const divisionLink = document.querySelector("#division");
const moralityLink = document.querySelector("#morality");
const principlesLink = document.querySelector("#principles");
const allLink = document.querySelector("#all");
const modal = document.querySelector('#thanks');
const closeModal = document.querySelector('#closeModal');
const submission = document.querySelector('#submission');

if (catbutton) {
    catbutton.addEventListener('click', () => {
        medianav.classList.toggle('show');
        catbutton.classList.toggle('show');
    });
}


media = getMediaList(media);
const info = new URLSearchParams(window.location.search);
console.log(info);
if(info.size > 0) {
    const newMedia = createNewMediaObject(info);
    submission.innerHTML = `
    <p><strong>Title: </strong>${newMedia.title}</p>
    <p><strong>Media Type: </strong>${newMedia.type}</p>
    <p><strong>Categories: </strong>${newMedia.category}</p>
    <p><strong>Summary: </strong>${newMedia.summary}</p>`;
    media.push(newMedia);
    modal.showModal(); 
    closeModal.addEventListener('click', () => {
        modal.close();
    });
    const cleanURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.replaceState({ path: cleanURL }, '', cleanURL);
}
localStorage.setItem("media", JSON.stringify(media));
createMediaCard(media);


function createMediaCard(media) {
    if (cards) {
        cards.innerHTML = "";
        media.forEach(m => {
            let card = document.createElement("div");
            let title = document.createElement("h3");
            let link = document.createElement("a");
            let type = document.createElement("p");
            let category = document.createElement("p");
            let summary = document.createElement("p");

            title.textContent = m.title;
            type.innerHTML = `<span class="label">Type:</span>  ${m.type}`;
            category.innerHTML = `<span class="label">Category:</span>  ${m.category}`;
            summary.innerHTML = `<span class="label">Summary:</span>  ${m.summary}`;

            link.setAttribute("href", m.link);
            link.setAttribute("aria-label", m.title);
            link.setAttribute("target", "_blank");
            link.append(title);

            card.appendChild(link);
            card.appendChild(type);
            card.appendChild(category);
            card.appendChild(summary);


            document.querySelector(".cards").appendChild(card);
        });
    }
}


function setCurrent(link) {
    document.querySelectorAll('.navigation a').forEach(a => a.removeAttribute('aria-current'));
    link.setAttribute('aria-current', 'page');
}


occultLink.addEventListener("click", (e) => {
    e.preventDefault();
    setCurrent(occultLink);
    createMediaCard(media.filter(m => m.category.includes("occult")));
});


conspiracyLink.addEventListener("click", (e) => {
    e.preventDefault();
    setCurrent(conspiracyLink);
    createMediaCard(media.filter(m => m.category.includes("conspiracy")));
});

divisionLink.addEventListener("click", (e) => {
    e.preventDefault();
    setCurrent(divisionLink);
    createMediaCard(media.filter(m => m.category.includes("division")));
});

moralityLink.addEventListener("click", (e) => {
    e.preventDefault();
    setCurrent(moralityLink);
    createMediaCard(media.filter(m => m.category.includes("morality")));
});

principlesLink.addEventListener("click", (e) => {
    e.preventDefault();
    setCurrent(principlesLink);
    createMediaCard(media.filter(m => m.category.includes("principles")));
});

allLink.addEventListener("click", (e) => {
    e.preventDefault();
    setCurrent(allLink);
    createMediaCard(media);
});


function createNewMediaObject(data) {
    const mediaObject = {
        title: `${data.get('title')}`,
        link: `${data.get('url')}`,
        type: `${data.get('media-type')}`,
        category: createCategories(data),
        summary: `${data.get('summary')}`
    }
    return mediaObject;
}

function createCategories(data) {
    let category = "";
    if (data.get('principles')) {
        category += "principles, ";
    }
    if (data.get('morality')) {
        category += "morality, ";
    }
    if (data.get('division')) {
        category += "division, ";
    }
    if (data.get('conspiracy')) {
        category += "conspiracy, ";
    }
    if (data.get('occult')) {
        category += "occult";
    }
    return category;
}

