const http = require('http');
const fs = require('fs');
const myServer = http.createServer((req, res)=>{
    // console.log(req.headers);
    const log = `${Date.now()}: ${req.url} New request received\n`;
    fs.appendFile("log.txt",log,()=> {
        // console.log("New request received ");
        // res.end("Hello from server ");
        switch(req.url){
            case '/':
                res.end("Homepage");
                break;
            case '/about':
                res.end("About");
                break;
            default:
                res.end("404");
        }
    });
});

myServer.listen(8000,()=> console.log("server started!"));



