let adviceID = document.querySelector('#adviceID')
let randomAdvice = document.querySelector('#randomAdvice')

const adviceData = async () => {
	let data = await fetch('https://api.adviceslip.com/advice')
	.then(response => response.json())
	.then(data => data)

	return data
}

adviceData().then(data => {
	adviceID.innerText = "Advice ID: "
	randomAdvice.innerText = data.slip.advice
})
