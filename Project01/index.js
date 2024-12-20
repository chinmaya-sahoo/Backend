const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json');
const PORT = 8000;

app.get('/api/users', (req, res) => {
    res.json(users);
})

app.get('/users', (req, res) => {
    const data = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    res.send(data);
});


app.listen(PORT, ()=> console.log(`Server Started at ${PORT}`));
