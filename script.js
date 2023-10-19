// quote array
const quotes = [
    "text1",
    "text2",
    "text3",
    "text4",
    "text5",
    "text6"
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