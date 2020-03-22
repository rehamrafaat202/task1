const bodyParser=require('body-parser')
const express=require('express')
const route =require('./route/router')
module.exports=(app)=>{
    app.use(express.static('public'))
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(route)
   

    return app;
}