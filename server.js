const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// GET endpoint to add two numbers
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Missing query parameters num1 and num2' });
    }
    const sum = parseFloat(num1) + parseFloat(num2);
    res.json({ result: sum });
});

// POST endpoint to add two numbers
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Missing body parameters num1 and num2' });
    }
    const sum = parseFloat(num1) + parseFloat(num2);
    res.json({ result: sum });
});

// GET endpoint to subtract two numbers
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Missing query parameters num1 and num2' });
    }
    const difference = parseFloat(num1) - parseFloat(num2);
    res.json({ result: difference });
});

// POST endpoint to subtract two numbers
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Missing body parameters num1 and num2' });
    }
    const difference = parseFloat(num1) - parseFloat(num2);
    res.json({ result: difference });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
