var express=require('express')
var ws=require('./ws')
var app=express()
app.get('/',function(request,response){
response.sendFile(__dirname + '/ws.html')
})
app.listen(3000,function(){
    console.log('app listen at port 3000')
})
