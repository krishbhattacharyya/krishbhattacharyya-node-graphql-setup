import { posts, users, movies } from './fake-data'
import _ from 'lodash'

type UserResolverType = {
  id: string
  postIds: [number]
}

type PostResolverType = {
  title: string
}

type MovieResolverType = {
  title: string
}

export const resolvers = {
  Query: {
    //hello: () => 'world'
    users: () => users, // Database call here and return the result
    user: (parent: any, args: UserResolverType) => {
      return _.find(users, { id: parseInt(args.id) })
    },
    posts: () => posts,
    post: (parent: any, args: PostResolverType) => _.find(posts, { title: args.title }),
    movies: () => movies,
    movie: (parent: any, args: MovieResolverType) => _.find(movies, { title: args.title })
  },
  USER: {
    favouriteMovies: () => {
      return _.filter(movies, (movie) => new Date(movie.released) >= new Date('04 May 2012'))
    },
    favouritePosts: (parent: any, args: any, contextValue: any, info: any) => {
      if (info.variableValues.postIds) {
        return _.filter(posts, (post: any) => info.variableValues.postIds.indexOf(post.id) !== -1)
      } else {
        return []
      }
    }
  },
  Mutation: {
    createUser: (parent: any, args: any) => {
      const newUser = { ...args.input, id: users.length + 1 }
      users.push(newUser)
      return users[users.length - 1]
    },
    updateUser: (parent: any, args: any) => {
      const updateUser = { ...args.input, id: parseInt(args.input.id) }
      const updatedUsers = users.map((user) => {
        if (user.id === updateUser.id) {
          user = { ...user, ...updateUser }
        }
        return user
      })
      return _.find(updatedUsers, { id: updateUser.id })
    },
    deleteUser: (parent: any, args: any) => {
      //const deleteUser = { ...args.input, id: parseInt(args.input.id)}
      //const deletedUser = users.filter((user) => user.id !== deleteUser.id)
      _.remove(users, (user) => user.id === parseInt(args.input.id))
      return null
    }
  }
}
