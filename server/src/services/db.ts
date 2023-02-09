import mysql from 'mysql'

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'login_register',
})

conn.connect((err: any) => {
  if (err) throw err
  console.log('Connected to database')
})

export { conn }
