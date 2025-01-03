const axios = require('axios');
const Papa = require('papaparse');

// Function to fetch and return a random quote
module.exports = async function getRandomQuote() {
    try {
        // The URL of the CSV file containing quotes
        const url = 'https://gist.githubusercontent.com/JakubPetriska/060958fd744ca34f099e947cd080b540/raw/963b5a9355f04741239407320ac973a6096cd7b6/quotes.csv';

        // Fetch the CSV file
        const { data } = await axios.get(url);

        // Parse the CSV content using PapaParse
        const parsedData = Papa.parse(data, {
            header: true,     // Use the first row as header (Author, Quote)
            skipEmptyLines: true, // Skip empty lines
        });

        // Get the list of quotes and authors
        const quotes = parsedData.data.filter(entry => entry.Author && entry.Quote);

        if (quotes.length === 0) {
            return 'No valid quotes found.';
        }

        // Pick a random quote from the list
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        // Return the selected random quote in the format: "Quote - Author"
        return `"${randomQuote.Quote}" - ${randomQuote.Author}`;

    } catch (error) {
        console.error('Error fetching or processing quotes:', error);
        return 'Oops, something went wrong while fetching quotes.';
    }
};
