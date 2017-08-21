import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './task';

@Component({
    selector: 'task',
    templateUrl: 'task.component.html'
})
export class TaskComponent implements OnInit{
    taskList = [];
    i: number;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get('http://localhost:3000/api/tasks').subscribe(data => {
            for(this.i=0; this.i<data["numTasks"]; this.i++){
                this.taskList.push(new Task(
                    data[this.i]["id"],
                    data[this.i]["name"],
                    data[this.i]["date"],
                    data[this.i]["goal"],
                    data[this.i]["deliverable"],
                    data[this.i]["priority"],
                    data[this.i]["starttime"],
                    data[this.i]["endtime"],
                    data[this.i]["reminder"],
                    data[this.i]["process"]
                ));
            }
        });
    }

    deleteTask(task: Task) : void {
        var response = confirm("Are you sure to delete this task?" + task.id);
        if (response){
            alert("user said yes");
        }
    }
}