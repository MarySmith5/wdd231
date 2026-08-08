import { translate } from "./translate.mjs";
const mainnav = document.querySelector('#nav1');
const medianav = document.querySelector('#nav2');
const hambutton = document.querySelector('#menu');
const translateButton = document.querySelector('#translate-btn');
const text1 = document.querySelector('.freedom p');
const text1_sp = localStorage.getItem("text1_sp");
const text2 = document.querySelector('.freedom h2');
const text2_sp = localStorage.getItem("text2_sp");
const text3 = document.querySelector('.freedom cite');
const text3_sp = localStorage.getItem("text3_sp");

let media = [
    {
        title: "A Child's Story of America",
        link: "https://a.co/d/059IMTeU",
        type: "book",
        category: "principles",
        summary:
            "An American history from discovery to 2000. Appropriate for children and adults with many inspiring accounts of heroes. Teaches the simple truths of freedom."
    },
    {
        title: "The Great and Abominable Church of the Devil",
        link: "https://a.co/d/0eASBm7K",
        type: "book",
        category: "principles, conspiracy, morality",
        summary:
            "Essential reading to understand the principles of liberty. An in-depth explanation priestcraft and Satan's works taught in the scriptures."
    },
    {
        title: "Technocracy Rising: The Trojan Horse of Global Transformation",
        link: "https://a.co/d/09ljmyDH",
        type: "audiobook",
        category: "conspiracy",
        summary:
            "The dark horse of the New World Order is not Communism, Socialism or Fascism. It is Technocracy."
    },
    {
        title: "The Creature from Jekyll Island: A Second Look at the Federal Reserve",
        link: "https://a.co/d/0a3FoIej",
        type: "book",
        category: "principles, conspiracy",
        summary:
            "How conspiracy captured the U.S. economic system."
    },
    {
        title: "The Last Days: Types and Shadows from the Bible and the Book of Mormon",
        link: "https://a.co/d/0fmvWz1D",
        type: "audiobook",
        category: "principles, morality",
        summary:
            "Explains the tie between covenant-keeping nations and freedom."
    },
    {
        title: "The Queering of the American Child: How a New School Religious Cult Poisons the Minds and Bodies of Normal Kids",
        link: "https://a.co/d/02XtccL4",
        type: "audiobook",
        category: "morality, division",
        summary:
            "Schools are no longer teaching children how to flourish in society—they are initiating children into the cult of Queer Theory."
    },
    {
        title: "Occult Feminism: The Secret History of Women's Liberation",
        link: "https://a.co/d/059IMTeU",
        type: "book",
        category: "morality, occult, division",
        summary:
            "A deep into the occult roots of the movement, detailing the lives of some of its most prominent figures and the esoteric beliefs that inspired and motivated them"
    },
    {
        title: "Freedom's Foundations Part 1: Americanism",
        link: "https://youtu.be/p_7qQksSxC8?si=EvP52aT6cb4jA1u_",
        type: "video",
        category: "principles, morality",
        summary:
            "This video teaches the inspiring principles that made the U.S.A. a free country. "
    },
    {
        title: "Global Tyranny...Step by Step: The United Nations and the Emerging New World Order",
        link: "https://a.co/d/08s6FRq8",
        type: "book",
        category: "conspiracy, occult",
        summary:
            "A comprehensive look at the organization through which the conspiracy operates."
    }
]

function getMediaList(media) {
    const mediaList = localStorage.getItem("media");
    if (mediaList) {
        return JSON.parse(mediaList);
    } else {
        return media;
    }
}

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

document.getElementById("lastModified").innerHTML = document.lastModified;
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();

const element = document.querySelector("article");
element.classList.add("visible");

translateButton.addEventListener('click', async () => {

    translate(text1, text1_sp, "text1_sp");
    translate(text2, text2_sp, "text2_sp");
    translate(text3, text3_sp, "text3_sp");
    
    translateButton.textContent = "English";
    translateButton.addEventListener('click', () => location.reload());
});
