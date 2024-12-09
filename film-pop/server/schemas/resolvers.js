const { User, Genre, Movie, MovieList } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        genres: async () => {
            const allGenres = await Genre.find();
            return allGenres;
        },
        movies: async () => {
            const allMovies = await Movie.find();
            return allMovies;
        },
        moviesByGenre: async (parent, args) => {
            const moviesByGenre = await Movie.find({
                genre: args.genre_id
            });
            return moviesByGenre;
        },
        moviesByRating: async (parent, args) => {
            const moviesByRating = await Movie.find({
                imdbRating: args.rating
            });
            return moviesByRating;
        },
        user: async (parent, args, context) => {
            if (context.user) {
                // retrieve user data, populated with movieLists and movies
                const userData = await User.find({
                    _id: context.user._id
                }).populate({
                    path: 'movieLists',
                    populate: {
                        path: 'movies'
                    }
                })

                return userData;
            } else {
                throw Error('User not authenticated');
            }
        }
    },
    Mutation: {
        // addUser code here



        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },

        createList: async (parent, args, context) => {
            // check if user is logged in
            if (context.user) {
                // if logged in, create a new movie list
                const newList = await MovieList.create({
                    listName: args.listName, // taking in arg from user 
                    user: context.user._id,
                })
                    // populate user and movies array
                    .populate("user")
                    .populate("movies")

                return newList;
            } else {
                throw Error('Error creating movie list!');
            }
        },

        addMovieToList: async (parent, args, context) => {
            if (context.user) {
                // find and update the movie list
                const updatedList = await MovieList.findOneAndUpdate(
                    {
                        _id: args.movieListId
                    },
                    // movieId is added to the list without duplicates
                    {
                        $addToSet: { movies: args.movieId }
                    },
                    // return the updated list
                    {
                        new: true
                    }
                )
                    .populate("user") // 'user' is a reference in the MovieList model
                    .populate("movies")

                return updatedList;
            } else {
                throw Error('Error updating movie list!');
            }
        },

        deleteMovieFromList: async (parent, args, context) => {
            if (context.user) {
                const updatedList = await MovieList.findOneAndUpdate(
                    {
                        _id: args.movieListId
                    },
                    {
                        $pull: { movies: args.movieId }
                    },
                    {
                        new: true
                    }
                )
                    .populate("user")
                    .populate("movies")

                return updatedList;
            } else {
                throw Error('Error deleting list');
            }
        },
    }
};

module.exports = resolvers;