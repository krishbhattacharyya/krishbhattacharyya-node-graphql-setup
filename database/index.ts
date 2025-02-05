import { Sequelize } from 'sequelize-typescript'

export const sequelizeConnection = new Sequelize('node-graphql', 'postgres', 'admin123', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
})

const dbConnection = async () => {
  try {
    await sequelizeConnection.authenticate()
    console.log('Connection has been established successfully.')

    /*app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`)
    })*/
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export { dbConnection }
