require('dotenv').config()
const mongoUrl = process.env.mongo_url
// console.log(mongoUrl)


const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())



const PORT = 5050

app.get('/', (req, res) => {
    console.log(req.query)
    console.log(req.query.test)
    
    res.status(201).json('Server works123')
})

app.post('/post', (req, res) => {
    console.log(req.body)
    res.status(200).json('Сервер работает 123')
})

app.listen(PORT, function() {
    console.log('App has been satrted ' + PORT)
})