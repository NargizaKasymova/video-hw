const express = require('express')

const app = express()
app.use(express.json())

const PORT = 5050

app.get('/', (req, res) => {
    res.status(201).json('Server works')
})

app.listen(PORT, function() {
    console.log('App has been satrted ' + PORT)
})