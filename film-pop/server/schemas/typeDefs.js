const typeDefs = `
  type Movie {
    _id: imdbID
    username: String
    description: String
    image: String
    genre: String
    rating: Float
  }

  type User {
    _id: ID
    username: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    genre: String
    rating: Float
    movies(genre: String, name: String, rating: Float): [Movie]
    user: User
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
    ): Auth
    addMovieToList(_id: imdbID!): Movie
    createMovieList(listname: String!)
    updateUser(
      username: String
      email: String
      password: String
    ): User
    deleteMovieFromList(_id: imdbID!): Movie
    deleteMovieList(_id: ID!)
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
