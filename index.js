const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// GET request example
app.get('/api/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = {
        id: userId,
        name: 'John Doe',
        email: 'john@example.com'
    };
    res.json(user);
});

// POST request example
app.post('/api/user', (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: Math.floor(Math.random() * 1000), // Random ID
        name,
        email
    };
    res.status(201).json(newUser); // 201 status code for resource created
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
