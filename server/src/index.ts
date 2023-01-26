import express, { Express, Request, Response } from 'express'
import { AppDataSource } from './data-source'
import routes from './routes/Index'

let PORT = 5000
let app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/api', routes)

app.listen(PORT, () => { 
  console.log(`[server] Server listening on port: ${PORT}!!`)
  AppDataSource.initialize()
    .then((item) => {
        console.log(`[${item.options.type}] [DATABASE: ${item.options.database}] connecting success!!`)
    })
    .catch((error) => console.log(error))
})