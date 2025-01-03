const express = require('express');
const getRandomQuote = require('./quotes'); // Import the getRandomQuote function

const app = express(); // Create an Express app
const PORT = 3000; // Define the port

// Serve static files (CSS file) from a public folder
app.use(express.static('public'));

// Route to display a random quote
app.get('/', async (req, res) => {
    const quote = await getRandomQuote();
    res.send(`
        <html>
            <head>
                <title>Motivational Quote's</title>
                <link rel="stylesheet" type="text/css" href="styles.css">
            </head>
            <body>
                <div class="container">
                    <h1>${quote}</h1>
                </div>
            </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
