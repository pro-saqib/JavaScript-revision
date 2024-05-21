const axios = require('axios');
const cheerio = require('cheerio');

// URL to scrape
const url = 'https://example.com';

// Fetch HTML content
axios.get(url)
    .then(response => {
        const $ = cheerio.load(response.data);
        // Extract data using jQuery-like syntax
        const title = $('title').text();
        console.log('Title:', title);
        // Add more scraping logic here
    })
    .catch(error => {
        console.log(error);
    });
