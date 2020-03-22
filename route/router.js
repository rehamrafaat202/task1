const express=require('express')

const Router=express.Router();

 Router.use(express.static('public'))
 const parser=require('body-parser')
     Router.use(parser.urlencoded({extended:false}))
    const controller=require('../controller/contt')

const fs=require('fs')
Router.get('/',controller.getHomePage)

Router.get('/add-product',controller.getAddProduct)
Router.post('/add-product',controller.postAddProudct)

Router.use(controller.getError)
module.exports=Router;
