const express = require('express')
const mongoose=require('mongoose')

const homeRoute=require('./routes/home')
const app=express()
const bodyParser=require("body-parser")
const port=3002
mongoose.connect('mongodb://localhost:27017/web',{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error',()=> console.log("Something went wrong for connect database"));
db.once('open',() =>{
    console.log("Database connected");
})

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/',homeRoute)


app.listen(port,()=>{
    console.log('Web listening on port 3002');
})