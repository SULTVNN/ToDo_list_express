const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const router = require("./routers/web")

// middlewares

app.use(methodOverride('_method',{methods:['POST','GET']})) //handle put and delete method
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for form data
// use ejs as view engine
app.set('view engine','ejs')

// style in ejs public folder
app.use(express.static(__dirname + '/public'));

// DB connect
mongoose.connect('mongodb://127.0.0.1:27017/ToDo').then(()=>console.log('connected'));
// routes
app.use('/',router);

app.listen(8000,()=>{
    console.log("server run in http://localhost:8000/");
});