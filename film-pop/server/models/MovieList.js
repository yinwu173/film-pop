// mod 22 act 26

const mongoose = require("mongoose");

const { Schema } = mongoose;

const movieListSchema = new Schema({
  listName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  movies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Movie",
    },
  ],
});

const MovieList = mongoose.model("MovieList", movieListSchema);

module.exports = MovieList;
