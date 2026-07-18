import { getMemberDataGrid } from "./chamber.mjs";
import { getMemberDataList } from "./chamber.mjs";

const cards = document.querySelector('.cards');
const gridbutton = document.querySelector("#grid-view");
const listbutton = document.querySelector("#list-view");

getMemberDataGrid(cards);
gridbutton.addEventListener("click", () => {
    getMemberDataGrid(cards);
});
listbutton.addEventListener("click", () => {
    getMemberDataList(cards);
});