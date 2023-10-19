// quote array
const quotes = [
    "text",
    "text",
    "text",
    "text",
    "text",
    "text"
];

// display text 
function displayRandomText() {
    const textContainer = document.getElementById("quote-text");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    textContainer.textContent = quotes[randomIndex];
}

// load random text at page start
window.addEventListener("load", displayRandomText)

// handle button click event
const newTextButton = document.getElementById("new-text-button");
newTextButton.addEventListener("click", displayRandomText);