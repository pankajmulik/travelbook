const express = require('express')
const userroute=require('./route/userRoute')
require('dotenv').config();

const app = express()

const port = process.env.PORT


app.use(express.json())


const middleware = ((req, res, next) => {
    next()
})

app.use(middleware)


app.use('/api/user', userroute)



app.listen(port, (req, res) => {
    console.log('listening on server )=8000')
})