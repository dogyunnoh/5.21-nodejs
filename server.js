var express = require('express')

var app = express()

app.get('/main' ,function(request,response){
console.log(request)
response.send("<h1 style='color:red'>안녕하세요</h1>")
})
// listen(포트, url , backlog , callback)
app.listen(8080 , function(){
console.log("server is starting at http://localhost:8080")
} ) 

