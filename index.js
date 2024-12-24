const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const candidates = [
    { id: 1, name: "Alice Johnson", skills: ["JavaScript", "React"], experience: 5 },
    { id: 2, name: "Bob Smith", skills: ["Python", "Django"], experience: 3 },
    { id: 3, name: "Charlie Brown", skills: ["Java", "Spring"], experience: 7 },
    { id: 4, name: "Diana Prince", skills: ["C#", ".NET"], experience: 4 },
    { id: 5, name: "Eve Adams", skills: ["Ruby", "Rails"], experience: 6 },
    { id: 6, name: "Frank Castle", skills: ["Go", "Microservices"], experience: 2 },
    { id: 7, name: "Grace Hopper", skills: ["C", "Assembly"], experience: 10 },
    { id: 8, name: "Hank Pym", skills: ["JavaScript", "Node.js"], experience: 5 },
    { id: 9, name: "Ivy Blue", skills: ["PHP", "Laravel"], experience: 4 },
    { id: 10, name: "Jake Peralta", skills: ["Python", "Flask"], experience: 3 },
];

app.get('/api/candidates', (req, res) => {
    res.json(candidates);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
