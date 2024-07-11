export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "UER, POST" type defines the queryable fields for every UER, POST in our data source.
  type USER {
    id: ID!,
    firstName: String,
    lastName: String!,
    maidenName: String,
    age: Int,
    gender: String,
    email: String,
    phone: String,
    username: String,
    password: String,
    birthDate: String,
    image: String,
    nationality: Nationality,
    role: String,
    posts: [POST],
    friends: [USER]
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

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    users: [USER!]!
    posts: [POST!]!
    user(id: ID!): USER
  }
`
