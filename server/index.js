import express from 'express'
import mysql from 'mysql'

const app = express()
const port = 3000

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'login_register',
})

connection.connect()

app.get('/', (req, res) => {
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) throw error
    res.send(results)
  })
})

app.listen(port, () => console.log(`Server listening on ${port}!`))
