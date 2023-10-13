const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// GET request example
app.get('/api/user/:id', (req, res) => {
    let userId = req.params.id;
    let user = {
        id: userId,
        name: 'John Doe',
        email: 'john@example.com'
    };
    res.json(user);
});

// POST request example
app.post('/api/user', (req, res) => {
    let { name, email } = req.body;
    let newUser = {
        id: Math.floor(Math.random() * 1000), 
        name,
        email
    };
    res.status(201).json(newUser); 
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
