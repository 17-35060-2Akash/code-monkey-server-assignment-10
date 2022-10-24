const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Code Monkey Api Running!');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const courseId = req.params.id;
    const selectedCourse = courses.find(course => course.id == courseId);
    res.send(selectedCourse);
});


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});