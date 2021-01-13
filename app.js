const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

//Bodyparser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Set static path
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'views')))

//Staring Webservice
app.get('/',function(req, res){
    res.send('Webserv is OK.')
})
app.listen(5000,function(){
    console.log(new Date()) 
    console.log('Webservice strated on port:5000...')
})