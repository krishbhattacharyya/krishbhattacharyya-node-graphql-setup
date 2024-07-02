import express, { Express } from 'express' // Request, Response
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServer } from '@apollo/server'

import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import http from 'http'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'

//import getRawBody from 'raw-body';
//import contentType from 'content-type';
import helmet from 'helmet'

//import { logger } from './logger/logger';
import { dbConnection } from './database'
//import rootRoutes from './routes/index'

//import { initModels } from './models'

//import { initController } from './controllers/initController'

export const app: Express = express()

const port = process.env.PORT || 4000

const posts = [
  {
    id: 1,
    title: 'His mother had always taught him',
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    tags: ['history', 'american', 'crime'],
    reactions: {
      likes: 192,
      dislikes: 25
    },
    views: 305,
    userId: 1
  },
  {
    id: 2,
    title: 'He was an expert but not in a discipline',
    body: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
    tags: ['french', 'fiction', 'english'],
    reactions: {
      likes: 859,
      dislikes: 32
    },
    views: 4884,
    userId: 1
  },
  {
    id: 3,
    title: 'Dave watched as the forest burned up on the hill.',
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    tags: ['magical', 'history', 'french'],
    reactions: {
      likes: 1448,
      dislikes: 39
    },
    views: 4152,
    userId: 2
  },
  {
    id: 4,
    title: 'All he wanted was a candy bar.',
    body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
    tags: ['mystery', 'english', 'american'],
    reactions: {
      likes: 359,
      dislikes: 18
    },
    views: 4548,
    userId: 2
  },
  {
    id: 5,
    title: 'Hopes and dreams were dashed that day.',
    body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
    tags: ['crime', 'mystery', 'love'],
    reactions: {
      likes: 119,
      dislikes: 30
    },
    views: 626,
    userId: 3
  }
]

const users = [
  {
    id: 1,
    firstName: 'Emily',
    lastName: 'Johnson',
    maidenName: 'Smith',
    age: 28,
    gender: 'female',
    email: 'emily.johnson@x.dummyjson.com',
    phone: '+81 965-431-3024',
    username: 'emilys',
    password: 'emilyspass',
    birthDate: '1996-5-30',
    image: 'https://dummyjson.com/icon/emilys/128',
    role: 'admin'
  },
  {
    id: 2,
    firstName: 'Michael',
    lastName: 'Williams',
    maidenName: '',
    age: 35,
    gender: 'male',
    email: 'michael.williams@x.dummyjson.com',
    phone: '+49 258-627-6644',
    username: 'michaelw',
    password: 'michaelwpass',
    birthDate: '1989-8-10',
    image: 'https://dummyjson.com/icon/michaelw/128',
    role: 'admin'
  },
  {
    id: 3,
    firstName: 'Sophia',
    lastName: 'Brown',
    maidenName: '',
    age: 42,
    gender: 'female',
    email: 'sophia.brown@x.dummyjson.com',
    phone: '+81 210-652-2785',
    username: 'sophiab',
    password: 'sophiabpass',
    birthDate: '1982-11-6',
    image: 'https://dummyjson.com/icon/sophiab/128',
    role: 'admin'
  }
]

dotenv.config()

app.use(cors<cors.CorsRequest>())

app.use(cookieParser())

// Security with helmet
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        imgSrc: [`'self'`, 'data:', 'apollo-server-landing-page.cdn.apollographql.com'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
        manifestSrc: [`'self'`, 'apollo-server-landing-page.cdn.apollographql.com'],
        frameSrc: [`'self'`, 'sandbox.embed.apollographql.com']
      }
    }
  })
)

app.use(express.urlencoded({ extended: true, limit: '1kb' }))

//express.json middleware from express
// This middleware parse the json oject from request body that we can use inside the code and attach it the object
// with the request object handlers
app.use(express.json({ limit: '10mb' }))

// Set up Apollo Server

// The GraphQL schema
/*const typeDefs = `#graphql
  type Query {
    hello: String
  }
`*/

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "UER, POST" type defines the queryable fields for every UER, POST in our data source.
  type USER {
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
    role: String
  }

  interface TReacttion {
      likes: Int,
      dislikes: Int
  }

  type POST {
    id: ID!,
    title: String,
    body: String,
    tags: [String],
    reactions: TReacttion,
    views: Int,
    userId: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    users: [USER]
    posts: [POST]
  }
`

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    //hello: () => 'world'
    users: () => users,
    posts: () => posts
  }
}

const httpServer = http.createServer(app)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

const startServer = async () => {
  await server.start()
  app.use(
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token })
    })
  )
}

startServer()

const initApp = async () => {
  try {
    // DB connection
    await dbConnection()

    // Creating tables in database
    //await initModels()

    // Insert data in database
    //await initController()
  } catch (err) {
    console.error('Unable to connect to the database:', err)
  }
}

initApp()

/*app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})*/

//app.all('/graphql')

// Auth Routes & Controllers
//app.use(rootRoutes)
const startServerListen = async () => {
  await new Promise<void>((resolve) => httpServer.listen({ port: port }, resolve))
  console.log(`🚀 Server ready at http://localhost:4000`)
}

startServerListen()
