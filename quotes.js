var quotes = [
  "Knowledge will give you power, but character respect. -Bruce Lee",
  "Do, or do not.  There is no try. -Yoda",
  "In any contest between power and patience, bet on patience. -W.B. Prescott",
  "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character. - Martin Luther King, Jr.",
  "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts. -Bertrand Russell",
  "If a man does his best, what else is there? -General George S. Patton",
  "We didn't lose the game; we just ran out of time. -Vinve Lombardi",
  "You can only find truth with logic if you have already found truth without it. -Gilbert Keith Chesterton",
  "A people that values its privileges above its principles soon loses both. -Dwight D. Eisenhower",
  "Sleep is an excellent way of listening to an opera. -James Stephens"
  "Age is something that doesn't matter, unless you are cheese.  -Luis Bunuel",
  "Weather forcast for tonight, dark.  -George Carlin",
  "From there to here, and here to there, funny things are everywhere.  -Dr. Seuss"
];

function nextQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}
