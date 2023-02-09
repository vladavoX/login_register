import AppError from '../utils/appError'
import { conn } from '../services/db'

export const getAllUsers = (req: any, res: any, next: any) => {
  conn.query('SELECT * FROM users', (err: any, results: any) => {
    if (err) next(new AppError(err.message, 400))
    res.status(200).json({
      status: 'success',
      results: results.length,
      data: {
        users: results,
      },
    })
  })
}
