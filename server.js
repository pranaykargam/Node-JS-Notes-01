const http = require("http");
        // OR // 
// const http = require("node:http");

const server = http.createServer(function(req,res){
    if(req.url === "/getSecreateData"){
        res.end("There is no secret data")
    }
      
    res.end("Hello!! World")
});

server.listen(7777);





