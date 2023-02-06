// commonJS
import express, { Express } from 'express'
// const router = express.Router()
import mysql from 'mysql'

const app: Express = express()
const port = 3000

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'login_register',
})
connection.connect()

app.listen(port, () => console.log(`Server listening on ${port}!`))

module.exports = connection
