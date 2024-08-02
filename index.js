
// express initalization // 

const express = require('express')

const app = express()

const port = 3000;


app.get('/',(req,res) => {
    res.send("Hello world")
})

app.get('/demo',(req,res)=>{
    res.send("this is demo")
})

app.listen(port , ()=> {
    console.log(`port is listening on ${port}`)
})