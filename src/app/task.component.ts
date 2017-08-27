import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './task';

@Component({
    selector: 'task',
    templateUrl: 'task.component.html'
})
export class TaskComponent implements OnInit {
    taskList = [];

    constructor(private http: HttpClient) { }

    //make get request to the server to grab all tasks
    ngOnInit(): void {
        this.http.get('http://localhost:3000/api/tasks').subscribe(data => {
            var counter = 0;
            while (data[counter] != null) {
                this.taskList.push(new Task(
                    data[counter]["taskId"],
                    data[counter]["name"],
                    data[counter]["date"],
                    data[counter]["goal"],
                    data[counter]["deliverable"],
                    data[counter]["priority"],
                    data[counter]["startTime"],
                    data[counter]["endTime"],
                    data[counter]["reminder"],
                    data[counter]["process"]
                ));
                counter++;
            }
        })
    }

    //prompts user for confirmation on task deletion and then deletes the task
    deleteTask(task: Task): void {
        var response = confirm("Are you sure to delete this task?" + task.taskId);
        if (response) {
            alert("user said yes");
        }
    }
}