var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var apiRouter = require('./routes/apiRouter')
//require('./routes/apiRouter')
var app = express()


app.set('views', path.join(__dirname+'/views'))
app.set('view engine', 'ejs')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api',apiRouter )
app.use('/',(req,res){
console.log(request.body)
response.render("index")
}
//app.get은 get방식으로 라우팅 처리 한 것 이다 (중계역할)
// app.get('/main' ,function(request,response){
// console.log(request)
// response.render('index')
// })
// listen(포트, url , backlog , callback)
app.listen(8080 , function(){
console.log("server is starting at http://localhost:8080")
} ) 

