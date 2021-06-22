const express = require('express')

const app = express()
app.use(express.json())

const PORT = 5050

app.get('/', (req, res) => {
    console.log(req.query)
    console.log(req.query.test)
    
    res.status(201).json('Server works123')
})



app.listen(PORT, function() {
    console.log('App has been satrted ' + PORT)
})