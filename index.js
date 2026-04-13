const express = require('express');
const app = express();

app.use(express.json());

const taskRoutes = require('./routes/taskRoutes');

app.use('/tasks', taskRoutes);

// 405 handler 
app.use('/tasks', (req, res) => {
    res.status(405).json({ message: "Method Not Allowed" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});