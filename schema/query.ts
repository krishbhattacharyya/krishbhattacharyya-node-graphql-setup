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
// In resolver please change id as number otherwise will give the error
