/*
const http = require('http');
const fs = require('fs');
const url = require('url');
const myServer = http.createServer((req, res)=>{
    if(req.url === '/favicon.ico') return res.end();
    // console.log(req.headers);
    const log = `${Date.now()}: ${req.method} ${req.url} New request received\n`;
    const myUrl = url.parse(req.url, true);
    // console.log(myUrl);
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
            case '/signup':
                if(req.method === "GET") res.end("This is the signup form");
                else if(req.method === "POST") res.end("success");
                break;
            default:
                res.end("404");
        }
    });
});

myServer.listen(8000,()=> console.log("server started!"));

*/




// Express JS
//letting express js handle everything 
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    return res.send("Hello From Home Page");
});

app.get('/about',(req, res)=>{
    return res.send("Hello From About Page" + "Hey" + res.query.name);
});

app.listen(8000,()=>console.log("Server started!"));

/*
Versioning:-
"^4.21.2"
"2"- minor update
"21"- recommended update
"4"- major update( code breaking)
"^4.21.2" :- from "4.21.2" to "5.0.0"(not inclusive)
"~4.21.2" :- from "4.21.2" to "4.21.9"(inclusive)
"latest" :- latest version
*/





