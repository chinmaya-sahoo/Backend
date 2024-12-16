const http = require('http');
const fs = require('fs');
const url = require('url');
const myServer = http.createServer((req, res)=>{
    if(req.url === '/favicon.ico') return res.end();
    // console.log(req.headers);
    const log = `${Date.now()}: ${req.url} New request received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt",log,()=> {
        // console.log("New request received ");
        // res.end("Hello from server ");
        switch(myUrl.pathname){
            case '/':
                res.end("Homepage");
                break;
            case '/about':
                const id = myUrl.query.id;
                res.end("About" + id);
                break;
            default:
                res.end("404");
        }
    });
});

myServer.listen(8000,()=> console.log("server started!"));



