import { translate } from "./translate.mjs";

const translateButton = document.querySelector('#translate-btn');
const text1 = document.querySelector('.freedom p');
const text1_sp = localStorage.getItem("text1_sp");
const text2 = document.querySelector('.freedom h2');
const text2_sp = localStorage.getItem("text2_sp");
const text3 = document.querySelector('.freedom cite');
const text3_sp = localStorage.getItem("text3_sp");


translateButton.addEventListener('click', async () => {

    translate(text1, text1_sp, "text1_sp");
    translate(text2, text2_sp, "text2_sp");
    translate(text3, text3_sp, "text3_sp");

    translateButton.textContent = "English";
    translateButton.addEventListener('click', () => location.reload());
});

const element = document.querySelector("article");
element.classList.add("visible"); 