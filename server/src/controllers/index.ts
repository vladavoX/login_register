import AppError from '../utils/appError'
import { conn } from '../services/db'

const loginUser = (req: any, res: any, next: any) => {
  const { username, password } = req.body
  conn.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err: any, results: any) => {
      if (err) next(new AppError(err.message, 400))
      if (results.length === 0)
        next(new AppError('Invalid username or password', 400))
      res.status(200).json({
        status: 'success',
        data: {
          user: results[0],
        },
      })
    }
  )
}

const registerUser = (req: any, res: any, next: any) => {
  const { username, password } = req.body
  conn.query(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, password],
    (err: any, results: any) => {
      if (err) next(new AppError(err.message, 400))
      res.status(200).json({
        status: 'success',
        data: {
          user: results[0],
        },
      })
    }
  )
}

export { loginUser, registerUser }
