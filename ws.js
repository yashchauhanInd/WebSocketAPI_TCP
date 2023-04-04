var webSocketServer=require('ws').Server
wss=new webSocketServer({port:40510})

wss.on('connection',function(ws){
    ws.on('message',function(message)
    {
console.log('message-received:%s',message)
    })
setInterval(()=>ws.send('${new data()}'),1000)
})