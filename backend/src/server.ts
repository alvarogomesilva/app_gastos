import cors from 'cors';
import express, { urlencoded, json, static as static_ } from 'express'
import Route from './routes/routes';
import { resolve } from 'path'

const app = express()

app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(json())

app.use('/files', static_(resolve(__dirname, '..', 'uploads')))
app.use(Route)

app.listen(3000, () => console.log('Server is listening!'))