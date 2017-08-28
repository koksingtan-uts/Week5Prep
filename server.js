// Initialize server components
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
var taskinitializer = require('./task-initializer');
var axios = require('axios');
var mongoose = require('mongoose');

// Initialize server for processing json and cors 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Initialize dummy task values
var tasks = taskinitializer.initializeTasks();

// Set up mongodb connection and data schema
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

// var t = new Task({     
// });

// t.save(function(err){
//     if (err) throw err;
//     console.log('task created');
// });    


// Set up router to provide message on each processing
router.use(function (req, res, next) {
    console.log("Something is happening.");;
    next();
});

// Routing for task module that returns all task data
router.get('/tasks', function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err)
            throw err;
        res.json(tasks);
    });
});

// Routing for task edit with id parameter
router.get('/task/edit/:id', function (req, res) {
    Task.find({ taskId: req.params.id }, function (err, task) {
        res.json(task);
    });
});

// Routing for task edit post request.
router.post('/task/edit/:id', function (req, res) {
    if (req.params.id != -1) {
        Task.find({ taskId: req.params.id }, function (err, task) {
            task[0].name = req.body.name;
            task[0].date = req.body.date;
            task[0].goal = req.body.goal;
            task[0].deliverable = req.body.deliverable;
            task[0].priority = req.body.priority;
            task[0].startTime = req.body.startTime;
            task[0].endTime = req.body.endTime;
            task[0].reminder = req.body.reminder;
            task[0].process = req.body.process;
            task[0].save(function(err) {
                console.log("successfully saved.");
            })
        });
    } else {
        Task.find({}, null, {sort: {taskId: -1}}, function (err, tasks) {
            var task = new Task({
                taskId: tasks[0].taskId+1,
                name: req.body.name,
                date: req.body.date,
                goal: req.body.goal,
                deliverable: req.body.deliverable,
                priority: req.body.priority,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                reminder: req.body.reminder,
                process: req.body.process
            });
            task.save(function(err) {
                console.log("saved");
            });
        });
    }
});

// Setup router root folder
app.use('/api', router);

// Listens to port 3000
app.listen(3000, function () {
    console.log('Server is running');
});