// app.js
let data;
let front = true;

const textFront = document.querySelector(".text");
const authorFront = document.querySelector(".author");
const button = document.querySelector(".new-quote");

const displayQuote = () => {
	let index = Math.floor(Math.random() * data.length);
	let quote = data[index].text;
	let author = data[index].author || "Anonymous";

	textFront.textContent = quote;
	authorFront.textContent = `- ${author}`;

	front = !front;
};

fetch("https://type.fit/api/quotes")
	.then((response) => response.json())
	.then((quotesData) => {
		data = quotesData;
		displayQuote();
	});

function newQuote() {
	displayQuote();
}
