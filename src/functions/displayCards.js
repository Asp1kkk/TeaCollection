import deleteCard from "./deleteCard.js";

const displayCards = async (section) => {
  fetch(`https://api-code.practicum-team.ru/heroes?_where[_or][0][studentEmail]=a5p1k@yandex.ru&_where[_or][1][studentEmail]=`)
	.then(response => response.json()).then(data => {
		section.innerHTML = "";
		data.forEach((card) => {
			let tea = document.createElement("article");
			tea.classList.add("card");
			tea.onclick = (e) => deleteCard(e, card.id)
			tea.innerHTML = ` 
			  <div class="card-info"> 
				<h2>${card.title}</h2> 
				<p>${card.description}</p> 
			  </div> 
			`;
			section.appendChild(tea);
		  });
	}).catch(e => console.log(e))
};

export default displayCards;
