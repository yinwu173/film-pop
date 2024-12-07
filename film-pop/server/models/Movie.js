// hold the movie name, synopsis, trailer, rating and/or genre
// mod 22 act 26

const mongoose = require("mongoose");

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  dateReleased: {
    type: String,
  },
  runtime: {
    type: String,
  },
  plot: {
    type: String,
  },
  poster: {
    type: String,
  },
  imdbRating: {
    type: Number,
  },
  metaRating: {
    type: Number,
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: "Genre",
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;