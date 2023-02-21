import express from 'express'
import authRoutes from './routes/auth.routes'

const app = express()

app.use(authRoutes)

export default app