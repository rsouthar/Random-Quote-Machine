var quotes = [
  "Howdy",
  "hello"
];

function nextQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}
