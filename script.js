let apiQuotes = [];

//Show new quote
function newQuote() {}

// Get Quotes From Api
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //Catch Error Here
  }
}

// On Load
getQuotes();
