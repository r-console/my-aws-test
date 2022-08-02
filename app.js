const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    console.log('home')
    res.status(200).send("Welcome to pm2")
})

app.post('/', (req, res, next) => {
    try{
        const { username, password } = req.body
        let a= 40/0;
        console.log(username)
    }
    catch (error) {
        // myLogger.error("mobile /login catch error");
        console.log(error)
        res.status(500).send({status:300})
    }
});

const port = process.env.PORT || 9000
app.listen(port, ()=>{
    console.log(`Listen on port ${port}`)
})