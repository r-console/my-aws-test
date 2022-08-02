const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    console.log('home')
    res.status(200).send("Welcome to pm2")
})

const port = process.env.PORT || 9000
app.listen(port, ()=>{
    console.log(`Listen on port ${port}`)
})