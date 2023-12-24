import displayCards from "./functions/displayCards.js";
import addCard from "./functions/addCard.js";

const button = document.querySelector('#btn');
export const section = document.querySelector(".cards-container");


displayCards(section)

button.onclick = addCard