// Sample query to get all users
/*
Operation
query GetAllUsers {
    users {
    id,
    firstName,
    lastName,
    nationality,
    posts {
      title
    }
    friends {
      id,
      firstName,
      lastName
    }
  }
}
*/
/* will create error if anything null */
/* If nationality enum not matched it wont work */

// Sample query to get single user
/*Operation
query GetUser($userId: ID!) {
  user(id: $userId) {
    firstName,
    lastName,
    nationality
  }
}
Variable
{
  "userId": 5
}*/

// Sample query to get all posts
// Operation
/*query GetAllPosts{
  posts {
    id,
    title
  }
}
*/

// Sample query to get Post
//Operation
/*query GetPost($title: String!){
  post(title: $title) {
    id,
    title
  }
}
  Variable
{
  "title": "His mother had always taught him"
}
*/

// In resolver please change id as number otherwise will give the error

// Sample query to get all user with favourite movies
//Operation
/*
Operation
query GetFavouriteMovies($userId: ID!){
  user(id: $userId) {
    id,
    firstName,
    favouriteMovies {
      id,
      images
    }
  }
}

*/

// Sample query to get user with favourite posts
//Operation

/*
query GetFavouritePosts($userId: ID!, $postIds: [Int]){
  user(id: $userId, postIds: $postIds) {
    id,
    firstName,
    favouritePosts{
      id,
      title
    }
  }
}
Variable
{
  "userId": 1,
  "postIds": [1]
}
*/

// Sample mutation for create user

/*Operation
mutation CreateUser($input: CreateUserType){
  createUser(input: $input) {
    lastName
    maidenName
    age
  }
}

Variable
{
  "input": {
    "firstName": "Krish",
    "lastName": "Bhattacharyya",
    "email": "kk@gmail.com"
  }
}
*/

// Sample mutation for update user

/*Operation
mutation UpdateUser($input: UpdateUserType){
  updateUser(input: $input) {
    id
    firstName,
    lastName,
    age
  }
}

Variable
{
  "input": {
    "firstName": "Krish",
    "lastName": "Bhattacharyya",
    "email": "kk@gmail.com"
  }
}
*/
