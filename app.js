(function () {
  let button = document.getElementById("btn");
  let quoteText = document.querySelector("#textQuote");
  let author = document.querySelector("#quote-author");
  let quotes = [
    { quote: "The purpose of our lives is to be happy.", auth: "Dalai Lama" },
    {
      quote: "Life is what happens when you’re busy making other plans.",
      auth: "John Lennon",
    },
    {
      quote:
        "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
      auth: "Thomas A. Edison",
    },
    {
      quote:
        "Money and success don’t change people; they merely amplify what is already there.",
      auth: "Will Smith",
    },
    {
      quote:
        "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
      auth: "Steve Jobs",
    },
  ];

  button.addEventListener("click", changeQuote);

  function changeQuote() {
    let index = Math.floor(Math.random() * quotes.length);

    quoteText.innerText = quotes[index]["quote"];
    author.innerHTML = quotes[index]["auth"];
  }
})();
