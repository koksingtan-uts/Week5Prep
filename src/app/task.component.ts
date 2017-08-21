import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './task';

@Component({
    selector: 'task',
    templateUrl: 'task.component.html'
})
export class TaskComponent implements OnInit{
    taskList = [];

    constructor(private http: HttpClient) { }

    //make get request to the server to grab all tasks
    ngOnInit(): void {
        this.http.get('http://localhost:3000/api/tasks').subscribe(data => {
            for(let i=0; i<data["numTasks"]; i++){
                this.taskList.push(new Task(
                    data[i]["taskId"],
                    data[i]["name"],
                    data[i]["date"],
                    data[i]["goal"],
                    data[i]["deliverable"],
                    data[i]["priority"],
                    data[i]["startTime"],
                    data[i]["endTime"],
                    data[i]["reminder"],
                    data[i]["process"]
                ));
            }
        });
    }

    //prompts user for confirmation on task deletion and then deletes the task
    deleteTask(task: Task) : void {
        var response = confirm("Are you sure to delete this task?" + task.taskId);
        if (response){
            alert("user said yes");
        }
    }
}