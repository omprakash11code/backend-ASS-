const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const candidates = [
    { id: 3, name: "Om Prakash", skills: ["Java", "Spring"], experience: 7 },
    { id: 1, name: "Aryan", skills: ["JavaScript", "React"], experience: 5 },
    { id: 2, name: "Ashish Goyal", skills: ["Python", "Django"], experience: 3 },
    { id: 3, name: " Prakash", skills: ["Java", "Spring"], experience: 7 },
    { id: 4, name: "Harsh chy", skills: ["C#", ".NET"], experience: 4 },
    { id: 5, name: "Rohit ", skills: ["Ruby", "Rails"], experience: 6 },
    { id: 6, name: "Monu", skills: ["Go", "Microservices"], experience: 2 },
    { id: 3, name: "Om Prakash", skills: ["Java", "Spring"], experience: 7 },
    { id: 7, name: "Gaurav", skills: ["C", "Assembly"], experience: 10 },
    { id: 8, name: "Nishant", skills: ["JavaScript", "Node.js"], experience: 5 },
    { id: 9, name: "rahul", skills: ["PHP", "Laravel"], experience: 4 },
    { id: 10, name: "Ram", skills: ["Python", "Flask"], experience: 3 },
];

app.get('/api/candidates', (req, res) => {
    res.json(candidates);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
