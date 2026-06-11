const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({

    name: String,

    tasks: [String]

});

module.exports = mongoose.model(
    'Project',
    projectSchema
);