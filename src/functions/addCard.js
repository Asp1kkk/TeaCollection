import displayCards from "./displayCards.js";
import { section, loading } from "../main.js";
const button = document.querySelector("#btn");

const addCard = (e) => {
	e.preventDefault();
	button.disabled = true;
	button.innerHTML = "Sending data...";
	section.innerHTML = "";
	section.appendChild(loading);
	let nameInput = document.querySelector("#tea-name");
	let typeInput = document.querySelector("#tea-type");
	const studentEmail = "a5p1k@yandex.ru";
	!nameInput.value || !typeInput.value
		? (alert("Type some info!"),
		  (button.disabled = false),
		  (button.innerHTML = "Create new card!"))
		: fetch("https://api-code.practicum-team.ru/heroes", {
				method: "POST",
				body: JSON.stringify({
					title: nameInput.value,
					description: typeInput.value,
					studentEmail: studentEmail,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
		  })
				.then((response) => response.json())
				.then((data) => console.log(data))
				.catch((e) => console.log(e))
				.finally(() => {
					button.disabled = false;
					button.innerHTML = "Create new card!";
					nameInput.value = "";
					typeInput.value = "";
					section.innerHTML = ""
					displayCards(section);
				});
};

export default addCard;
