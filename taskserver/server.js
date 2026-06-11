const express = require('express');
const cors = require('cors');

const app = express();

require('./models/db');

const Project = require('./models/projectModel');

app.use(cors());
app.use(express.json());

app.get('/projects', async (req, res) => {

    const projects = await Project.find();

    res.json(projects);
});

app.post('/projects', async (req, res) => {

    const project = new Project({
        name: req.body.name,
        tasks: []
    });

    await project.save();

    res.json(project);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});