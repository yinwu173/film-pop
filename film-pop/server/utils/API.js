// mod 20 act 20
import axios from "axios";

// load environment variables from .env file
require('dotenv').config();
const apikey = process.env.API_KEY;

// helper function
//create URL based on type=movie, s (title) includes "make" (filter for genre and rating using JS)
// title or movie ID is required in URL; using a more general word like "the" instead of "make" returns the message "Too Many Results" (make returns 1700 results, of which only 10 are displayed so there are many pages)
const searchURL = async (page) =>
  axios.get(
    `http://www.omdbapi.com/?apikey=${apikey}&s=make&type=movie&page=${page}`
  );

/** 
 * 
 * 
 * When using s instead of t for title, the search results do NOT include genre and rating; only Title, Year, imdbID, Type, and Poster. Must retrieve more than one result, each of which is a different movie, with JS. Might revert to original URL string that only uses t
 * 
 * 
 *  */



// create search function to account for pagination, so results can change when search is clicked repeatedly
const search = async (currentPage = 1) => {
    const url = searchURL(currentPage);
    try {
        // send the request to the API and wait for a response
        const response = await axios.get(url);
        // check for an error
        if(!response.ok || (response.ok && response.data.Response === "False")) {
            alert('Unexpected error! Please try again.');
        }
        // get total number of search results; shown as a string in test data object
        const movieResults = parseInt(response.data.totalResults, 10);
        // determine number of pages of movies
        const totalPages = Math.ceil(movieResults / 10);

        // return the movie results, current page, number of pages
        return {
            results: response.data.Search, //Search is the array of movies within the data object
            currentPage,
            totalPages,
        }

    } catch (err) {
        console.error('Error fetching data:', err);
        alert("Error fetching data!");
    }
}

// export search function
export default { search };
