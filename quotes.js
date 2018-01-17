var quotes = [
  "Knowledge will give you power, but character respect. -Bruce Lee",
  "Do, or do not.  There is no try. -Yoda",
  "In any contest between power and patience, bet on patience. -W.B. Prescott",
  "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character. - Martin Luther King, Jr."
];

function nextQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}
