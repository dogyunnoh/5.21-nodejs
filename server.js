var express = require('express')
var path = require('path')
var badyParser = require('body-parser')
var app = express()

app.set('views', path.join(__dirname+'/views'))
app.set('view engine', 'ejs')

//app.use() 미들웨어

app.get('/main' ,function(request,response){
console.log(request)
response.render('index')
})
// listen(포트, url , backlog , callback)
app.listen(8080 , function(){
console.log("server is starting at http://localhost:8080")
} ) 

