var router = require('express').Router();

var Task = require('./taskdb-access');

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

module.exports = router;