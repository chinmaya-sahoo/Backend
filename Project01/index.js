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
    fs.appendFile('./log.txt', `\n${Date.now()} : ${req.method}: ${req.path}\n`, (err) => {
        if (err) {
            console.error('Error appending to file:', err);
        }
        next();
    });
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
    res.setHeader("X-MYNAME" , "chinmaya sahoo");
    // console.log(req.headers)
    return res.json(users);
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) return res.status(404).json({error : " user not found"});
    return res.json(user);
})

app.post('/api/users', (req, res) => {
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({ msg : "All Fields Are Required"})
    }
    // console.log("Body : ",body);
    users.push({ id : users.length + 1 , ...body });
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err, data) => {
        return res.status(201).json({ status : "success" , newId : users.length });
    });
})

app.patch('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    const body = req.body;
    if(!user) {
       return res.status(404).json({ error : " user not found"});
    }
    else{
        // user.id = body.id;
        user.first_name = body.first_name;
        user.last_name = body.last_name;
        user.email = body.email;
        user.gender = body.gender;
        user.job_title = body.job_title;
        fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err, data) => {
            return res.json({ status : "successfully updated" , updatedId : id });
        });
    }
    // return res.json({ status : "pending"});
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
