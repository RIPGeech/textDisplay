// quote array
const quotes = [
    "text 1",
    "text 2",
    "text 3",
    
];
 
// display random text
function displayRandomQuote() {
    const quoteContainer = document.getElementById("quote-text");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteContainer.textContent = quotes[randomIndex];
}
 
// load random text when page loads
window.addEventListener("load", displayRandomQuote);
 
// handle button click event
const newQuoteButton = document.getElementById("new-quote-button");
newQuoteButton.addEventListener("click", displayRandomQuote);