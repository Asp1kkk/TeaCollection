import displayCards from "./displayCards.js"
import { section } from "../main.js"

const deleteCard = async (e, cardId) => {
	fetch(`https://api-code.practicum-team.ru/heroes/${cardId}`, {
		method: "DELETE",
		headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
	})
	.then(response => {if (!response.ok) throw new Error(`Ошибка при удалении карточки: ${response.status}`)})
	.catch(e => console.log(e))
	.finally(() => displayCards(section))
}

export default deleteCard
