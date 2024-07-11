import { posts, users } from './fake-data'
import _ from 'lodash'

type UserResolverType = {
  id: string
}

export const resolvers = {
  Query: {
    //hello: () => 'world'
    users: () => users, // Database call here and return the result
    user: (parent: any, args: UserResolverType) => _.find(users, { id: parseInt(args.id) }),
    posts: () => posts
  }
}
