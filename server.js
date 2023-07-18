import express, { json } from "express";
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from "./middleware/errormiddleware.js";
import connectDB from "./config/db.js";
import blogRoutes from './routes/blogRoute.js'


dotenv.config()

//connecting the express server with mongodb to retrieve and save documents to and from the db
connectDB()

//initializing the express app
const app = express()
app.use(express.json())

app.use('/api/blog', blogRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, console.log(`server running on port ${PORT}`.yellow.bold))