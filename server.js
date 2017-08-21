var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');
var taskinitializer = require('./task-initializer');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var tasks = taskinitializer.initializeTasks();

router.use(function(req, res, next){
    console.log("Something is happening.");
    next();
});

router.get('/tasks', function(req, res){
    console.log(req.params.id);
    res.json(JSON.stringify(tasks));
});

router.get('/task/edit/:id', function(req, res){
    var task = {
        id: -1
    };
    for (i=0; i<tasks["numTasks"]; i++){
        if (tasks[i].id == req.params.id) {
            task = tasks[i];
        }
    }
    res.json(JSON.stringify(task));
});

router.post('/task/edit/:id', function(req, res){
    for (i=0; i<tasks["numTasks"]; i++){
        if (tasks[i].id == req.params.id) {
            tasks[i].name = req.body.name;
            tasks[i].date = req.body.date;
            tasks[i].goal = req.body.goal;
            tasks[i].deliverable = req.body.deliverable;
            tasks[i].priority = req.body.priority;
            tasks[i].starttime = req.body.starttime;
            tasks[i].endtime = req.body.endtime;
            tasks[i].reminder = req.body.reminder;
            tasks[i].process = req.body.process;
            console.log("successfully done");
        }
    }
});

app.use('/api', router);

app.listen(3000, function(){
    console.log('Server is running');
    console.log(tasks[0].id);
});