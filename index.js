const getRandomQuote = require('./quotes');  // Import the function from quotes.js

// Call the function and display the random quote
getRandomQuote().then(quote => {
    console.log(quote);
}).catch(err => {
    console.log('Error:', err);
});
