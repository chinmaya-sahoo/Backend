const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json');
const PORT = 8000;

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
    return res.json({ status : "pending"});
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
