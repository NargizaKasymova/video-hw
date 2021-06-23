require('dotenv').config()
const mongoUrl = process.env.mongo_url
// console.log(mongoUrl)


const express = require('express')
const mongoose = require('mongoose')
const {Post} = require('./Post')
const app = express()
app.use(express.json())

const PORT = 5050

app.get('/', (req, res) => {
    console.log(req.query)
    console.log(req.query.test)
    
    res.status(201).json('Server works123')
})

app.post('/post', async (req, res) => {
    const {author, title, content, picture} = req.body
    const post = await Post.create({author, title, content, picture})
    console.log(req.body)
    res.json(post)
    // res.status(200).json('Сервер работает 123')
})


async function startApp() {
    try{
        await mongoose.connect(mongoUrl, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, function() {
            console.log('App has been satrted ' + PORT)
        })
    } catch(e){
        console.log(e)
    }
}


// app.listen(PORT, function() {
//     console.log('App has been satrted ' + PORT)
// })