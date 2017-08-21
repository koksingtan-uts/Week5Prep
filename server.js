//Initialize server components
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');
var taskinitializer = require('./task-initializer');

//Initialize server for processing json and cors 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//Initialize dummy task values
var tasks = taskinitializer.initializeTasks();

//Set up router to provide message on each processing
router.use(function(req, res, next){
    console.log("Something is happening.");
    next();
});

//Routing for task module that returns all task data
router.get('/tasks', function(req, res){
    console.log(req.params.id);
    res.json(JSON.stringify(tasks));
});

//Routing for task edit with id parameter
router.get('/task/edit/:id', function(req, res){
    var task = {
        id: -1
    };
    for (i=0; i<tasks["numTasks"]; i++){
        if (tasks[i].taskId == req.params.id) {
            task = tasks[i];
        }
    }
    res.json(JSON.stringify(task));
});

//Routing for task edit post request.
router.post('/task/edit/:id', function(req, res){
    for (i=0; i<tasks["numTasks"]; i++){
        if (tasks[i].taskId == req.params.id) {
            tasks[i].name = req.body.name;
            tasks[i].date = req.body.date;
            tasks[i].goal = req.body.goal;
            tasks[i].deliverable = req.body.deliverable;
            tasks[i].priority = req.body.priority;
            tasks[i].startTime = req.body.startTime;
            tasks[i].endTime = req.body.endTime;
            tasks[i].reminder = req.body.reminder;
            tasks[i].process = req.body.process;
        }
    }
});

//setup router root folder
app.use('/api', router);

//listens to port 3000
app.listen(3000, function(){
    console.log('Server is running');
});