import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const loginHandler = (req: Request, res: Response) => {
  const token = jwt.sign(
    {
      test: 'test',
    },
    'secretToken',
    {
      expiresIn: 3600 * 24,
    }
  )

  return res.json({
    token,
  })
}

export const profileHandler = (req: Request, res: Response) => {
  return res.json({
    message: "Profile data"
  })
}
