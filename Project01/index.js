const express = require('express');

const fs = require('fs');
const app = express();

const users = require('./MOCK_DATA.json');
const PORT = 8000;

//middleware
app.use(express.urlencoded({extended : false}));

app.use((req, res, next) => {
    req.userName = "chinmaya";
    console.log('Hello from middleware-1');
    // return res.json({ msg : 'Hello from middleware-1' });//make the function stuck here
    next();
});

app.use((req, res, next) => {
    console.log('Hello from middleware-2' , req.userName);
    fs.appendFile('./log.txt', `\n${Date.now()} : ${req.method}: ${req.path}\n`);
    next();
});





app.get('/users', (req, res) => {
    const data = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    return res.send(data);
});

app.get('/api/users', (req, res) => {
    return res.json(users);
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

app.post('/api/users', (req, res) => {
    const body = req.body;
    // console.log("Body : ",body);
    users.push({ id : users.length + 1 , ...body });
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err, data) => {
        return res.json({ status : "success" , newId : users.length });
    });
})

app.patch('/api/users/:id', (req, res) => {
    return res.json({ status : "pending"});
})

app.delete('/api/users/:id', (req, res) => {
    return res.json({ status : "pending"});
})



/*
//another way of request handling

app
.route('/api/users/:id')
.get((req, res) => {
    return res.json(users);
})
.post((req, res) => {
    return res.json({ status : "pending"});
})
.patch((req, res) => {
    return res.json({ status : "pending"});
})
.delete((req, res) => {
    return res.json({ status : "pending"});
})

*/

app.listen(PORT, ()=> console.log(`Server Started at ${PORT}`));
