const express = require('express');
const router = express.Router();

router.get('/users', async (req, res) => {
    const allDbUsers = await User.find();
    const data = `
        <ul>
            ${allDbUsers.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    return res.send(data);
});

router.get('/api/users', async (req, res) => {
    // res.setHeader("X-MYNAME" , "chinmaya sahoo");
    // console.log(req.headers)
    const allDbUsers = await User.find();

    return res.json(allDbUsers);
})

router.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) return res.status(404).json({error : " user not found"});
    return res.json(user);
})

router.post('/api/users', async (req, res) => {
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({ msg : "All Fields Are Required"})
    }
    // console.log("Body : ",body);
    // users.push({ id : users.length + 1 , ...body });
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err, data) => {
    //     return res.status(201).json({ status : "success" , newId : users.length });
    // });
    const result = await User.create({
        first_name : body.first_name,
        last_name : body.last_name,
        email : body.email,
        gender : body.gender,
        job_title : body.job_title,
    })
    // console.log(result);
    return res.status(201).json({ msg : "successfully created" })
})

router.patch('/api/users/:id', async (req, res) => {
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    // const user = await User.findById(req.params.id)
    // if(!user) {
    //    return res.status(404).json({ error : " user not found"});
    // }
    await User.findByIdAndUpdate(req.params.id ,{ last_name : "okay"});
    // const body = req.body;
    // else{
    //     // user.id = body.id;
    //     user.first_name = body.first_name;
    //     user.last_name = body.last_name;
    //     user.email = body.email;
    //     user.gender = body.gender;
    //     user.job_title = body.job_title;
    //     // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err, data) => {});
    // }
    // return res.json({ status : "pending"});
    return res.json({ status : "successfully updated" , updatedId : req.params.id });
})

router.delete('/api/users/:id', async (req, res) => {
    // const id = Number(req.params.id);
    // const index = users.findIndex((user) => user.id === id);
    const user = await User.findById(req.params.id);
    if(!user) {
        return res.status(404).json({ error : " user not found"});
    }
    // users.splice(index, 1);
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err, data) => {
    //     return res.json({ status : "successfully deleted" , deletedId : id })
    // return res.json({ status : "pending"});
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status : "successfully deleted" , deletedId : req.params.id})

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
