const typeDefs = `
    type Genre {
      name: String
    }

    type Movie {
      title: String
      dateRelease: String
      runTime: String
      plot: String
      poster: String
      imdbRating: Int
      metaRating: Int
      genre: Genre
    }

    type MovieList {
      listName: String
      user: User
      movies: [Movie]
    }

    type User {
      username: String
      email: String
      movieLists: [MovieList]
    }
    
    type Auth {
      token: ID
      user: User
    }

    type Query {
      genres: [Genre]
      movies: [Movie]
      moviesByGenre(genre_id: String): [Movie]
      moviesByRating(rating: Int): [Movie]
      me: User
    }
    type Mutation {
      addUser(
        username: String!
        email: String!
        password: String!
      ): Auth
      createList(listName: String): MovieList
      addMovieToList(movieListId: ID, movieId: ID): MovieList
      deleteMovieFromList(movieListId: ID, movieId: ID): MovieList
      login(email: String!, password: String!): Auth
      }
`;

module.exports = typeDefs;
