
// express initalization // 

const express = require('express')

const app = express()

const port = 3000

// ADDING DOTENV // 

require('dotenv').config();

app.get('/',(req,res) => {
    res.send("Hello world")
})

app.get('/demo',(req,res)=>{
    res.send("this is demo")
})

app.listen(process.env.PORT , ()=> {
    console.log(`port is listening on ${port}`)
})