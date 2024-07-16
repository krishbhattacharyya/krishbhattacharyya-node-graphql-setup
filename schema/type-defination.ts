export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "UER, POST" type defines the queryable fields for every UER, POST in our data source.
  type USER {
    id: ID!,
    firstName: String!,
    lastName: String!,
    maidenName: String,
    age: Int,
    gender: String,
    email: String!,
    phone: String,
    username: String,
    password: String,
    birthDate: String,
    image: String,
    nationality: Nationality,
    role: String,
    posts: [POST],
    friends: [USER],
    favouriteMovies: [MOVIE],
    favouritePosts: [POST]
  }

  interface TReacttion {
      likes: Int,
      dislikes: Int
  }

  enum Nationality { 
    American,
    Indian
  }

  type POST {
    id: ID!,
    title: String,
    body: String,
    tags: [String],
    reactions: TReacttion,
    views: Int,
    userId: USER
  }

  type MOVIE {
    id: ID!,
    title: String,
    year: String,
    images: [String],
    released: String,
    director: String,
    country: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    users: [USER!]!
    posts: [POST!]!
    user(id: ID!, postIds: [Int]): USER
    post(title: String!): POST,
    movies: [MOVIE!],
    movie(title: String!): MOVIE
  }
  
  input CreateUserType {
    firstName: String!,
    lastName: String!,
    maidenName: String,
    age: Int,
    gender: String,
    email: String!,
    phone: String,
    username: String,
    password: String,
    birthDate: String,
    image: String,
    nationality: Nationality = Indian,
    role: String = "anonymous"
  }
  input UpdateUserType {
    id: ID!,
    firstName: String,
    lastName: String,
    maidenName: String,
    age: Int,
    gender: String,
    email: String,
    phone: String,
    username: String,
    password: String,
    birthDate: String,
    image: String,
    nationality: Nationality = Indian,
    role: String = "anonymous"
  }
  input DeleteUserType {
    id: ID!
  }

  type Mutation {
    createUser(input: CreateUserType): USER
    updateUser(input: UpdateUserType): USER
    deleteUser(input: DeleteUserType): USER
  }
`

// createUser(firstName: String!, lastName: String!, email: String!): USER
//createUser(user: User!): USER

/*
Mutation: {
  login: async (_, { email }, { dataSources }) => {
    const user = await dataSources.userAPI.findOrCreateUser({ email });
    if (user) {
      user.token = Buffer.from(email).toString('base64');
      return user;
    }
  },
}*/

/*
mutation CreateUser($input: CreateUserType) {
  createUser(input: $input) {
    firstName
  }
}
  */
