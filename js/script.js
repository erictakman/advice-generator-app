const adviceID = document.querySelector("h2")
const randomAdvice = document.querySelector("p")
const getRandomQuoteButton = document.querySelector(".getRandomQuoteButton")

const adviceData = async () => {
	return await fetch("https://random-data-api.com/api/v2/beers")
		.then((response) => response.json())
		.then((data) => {
			adviceID.innerHTML = data.brand
			randomAdvice.innerHTML = data.name
			console.log(data)
		})
}

adviceData()

getRandomQuoteButton.addEventListener("click", () => {
	console.log("click")
	adviceData()
});

