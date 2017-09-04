var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/')
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    taskId: Number,
    name: String,
    date: String,
    goal: String,
    deliverable: String,
    priority: String,
    startTime: String,
    endTime: String,
    reminder: String,
    process: String
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;