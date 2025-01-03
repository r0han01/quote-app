# Quote App

A **Dockerized Express application** that fetches and displays **random motivational quotes**. This app pulls quotes from a CSV file hosted on GitHub and serves them dynamically to users through an Express API.

![21](https://github.com/user-attachments/assets/f7c2023c-9879-4371-8432-e6a0ac09a671)

---

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Acknowledgments](#acknowledgments)
- [License](#license)

---

## Description

This project demonstrates a simple web application that uses **Node.js** and **Express** to fetch a random motivational quote and display it to the user. The quotes are pulled from an **open-source CSV file** hosted on GitHub, and a custom function (`getRandomQuote`) is used to parse and return a random quote from the file.

The app is **Dockerized** for easy deployment, ensuring a consistent environment for running the app on any machine.

---

## Features

- Fetches **random motivational quotes** from a CSV file hosted on GitHub.
- Displays the quotes on a clean, minimalist page with hover effects.
- **Dockerized** for easy containerization and deployment.
- Responsive design that adapts to different screen sizes.

---

## Installation

To run this application locally or within a Docker container, follow these steps:

### Prerequisites

- **Node.js** (version 18 or higher)
- **Docker** (if using Docker for deployment)

### Clone the Repository

```bash
git clone https://github.com/<your-username>/quote-app.git
cd quote-app
```
#### Install Dependencies
- If you are running the app locally, install the required dependencies using npm:

```bash
npm install
```
### Usage
#### Running the App Locally
- Once the dependencies are installed, you can start the application using the following command:

```bash
node server.js
```
- The app will start on port 3000. Visit `http://localhost:3000` in your browser to see the random motivational quotes being served.

### Running the App with Docker
- Alternatively, you can run the app using Docker:

#### Build the Docker image:

```bash
docker build -t quote-app .
```
- Run the Docker container:

```bash
docker run -d -p 3000:3000 quote-app
```
- Once the Docker container is running, visit `http://localhost:3000` in your browser.

### Technologies Used
- `Node.js` (v18)
- `Express.js` – Web framework for Node.js
- `Docker` – For containerization and easy deployment
- `Axios` – For making HTTP requests to fetch the CSV file
- `PapaParse` – For parsing the CSV file and extracting the quote data
- `HTML/CSS` – For the frontend to display the quotes
Acknowledgments
- `Quote Source`: The quotes used in this app are sourced from a public GitHub repository by JakubPetriska, who has made these motivational quotes available via a CSV file. You can find the original CSV here.

### Why this URL is important:
- By using the CSV file hosted on GitHub, we can dynamically fetch new quotes every time the app is restarted. This ensures that the app doesn't require hardcoded quotes, allowing for easy updates or additions to the list without modifying the application code.

- `Custom Module`: This project uses a custom Node.js module (quotes.js) to fetch a random quote from the CSV. The function getRandomQuote extracts the quote data, filters out invalid entries, and selects a random quote for display.

```javascript
const getRandomQuote = require('./quotes');  // Import the function from quotes.js

getRandomQuote().then(quote => {
    console.log(quote);  // Log the random quote
}).catch(err => {
    console.log('Error:', err);  // Handle any errors
});
```
- This modular approach improves code readability and maintainability by separating the quote-fetching logic into a standalone function, making it reusable and easily modifiable.
