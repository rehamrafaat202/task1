// const path=require('path')
const express=require('express')


const Router=express.Router();
const path=require('path')
Router.use(express.static('public'))
const fs=require('fs')
const bodyparser=require('body-parser')

Router.use(bodyparser.urlencoded({extended:false}))
 var getHomePage=(req,res)=>{
    res.sendFile(path.join(__dirname,'view','shop.html'))
 }
var getAddProduct= (req,res)=>{
    res.sendFile(path.join(__dirname,'view','add-product.html'))


}
var postAddProudct=(req,res)=>{

    fs.appendFileSync('data.txt',req.body.title+'\n')
     console.log(req.body.title)
   
res.redirect('/');
}
var getError=(req,res)=>{
    res.sendFile(path.join(__dirname,"view",'404.html'))

}

module.exports={
    getHomePage,
    getAddProduct,
    postAddProudct,
    getError
};