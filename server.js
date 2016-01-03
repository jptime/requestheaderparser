var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req,res){
    var data = {},
        regExp = /\(([^)]+)\)/;
    
    data.ipaddress = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
     
    data.language = req.headers["accept-language"].split(',')[0];
    
    data.software = regExp.exec(req.headers["user-agent"])[1];
     
    res.send(data)
})

var server = app.listen(port);