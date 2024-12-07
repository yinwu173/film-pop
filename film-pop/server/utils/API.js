// mod 20 act 20
import axios from "axios";
// load environment variables from .env file
require('dotenv').config();
const apikey = process.env.API_KEY;

// create search query based on genre (add rating later)
const search = async (query) =>
  axios.get(
    `http://www.omdbapi.com/?apikey=${apikey}&type=movie&genre=${query}`
  );

export default { search };
