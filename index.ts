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

import { typeDefs } from './schema/type-defination'
import { resolvers } from './schema/resolvers'
import { resolverLogPlugin } from './utils/resolverlogs'

export const app: Express = express()

const port = process.env.PORT || 4000

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

const httpServer = http.createServer(app)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer }), resolverLogPlugin]
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
