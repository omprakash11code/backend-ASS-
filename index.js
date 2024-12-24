const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const candidates = [
    { id: 1, name: "Aryan Krishna", skills: ["JavaScript", "React"], experience: 5 },
    { id: 2, name: "Ashish Goyal", skills: ["Python", "Django"], experience: 3 },
    { id: 3, name: "Om Prakash", skills: ["Java", "Spring"], experience: 7 },
    { id: 4, name: "Harsh", skills: ["C#", ".NET"], experience: 4 },
    { id: 5, name: "Rohit Malik", skills: ["Ruby", "Rails"], experience: 6 },
    { id: 6, name: "Milan", skills: ["Go", "Microservices"], experience: 2 },
    { id: 7, name: "Nayan", skills: ["C", "Assembly"], experience: 10 },
    { id: 8, name: "Nishant", skills: ["JavaScript", "Node.js"], experience: 5 },
    { id: 9, name: "Nitin", skills: ["PHP", "Laravel"], experience: 4 },
    { id: 10, name: "Ankit", skills: ["Python", "Flask"], experience: 3 },
];

app.get('/api/candidates', (req, res) => {
    res.json(candidates);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
