module.exports = {
    initializeTasks: function(){
        var tasklist = {};
        tasklist.numTasks = 3;
        tasklist[0] = {
            taskId: 1,
            name: "Read book",
            date: "21/08/2017",
            goal: "Complete chapter 1",
            deliverable: "Chapter 1 summary",
            priority: "High",
            startTime: "9:30 AM",
            endTime: "10:30 AM",
            reminder: "No",
            process: "Just read"
        };
        
        tasklist[1] = {
            taskId: 2,
            name: "Research for industry project",
            date: "21/08/2017",
            goal: "Get information about hardware/software about surveillance cameras with facial recognition",
            deliverable: "Summary",
            priority: "High",
            startTime: "11:00 AM",
            endTime: "12:00 PM",
            reminder: "No",
            process: "Google"
        };
        
        tasklist[2] = {
            taskId: 3,
            name: "AIP assessment 3, login feature",
            date: "22/08/2017",
            goal: "Complete implementation of login feature",
            deliverable: "Working login feature",
            priority: "High",
            startTime: "11:00 AM",
            endTime: "12:00 PM",
            reminder: "No",
            process: "Check official documentation, google"
        };
        return tasklist;
    }
}

