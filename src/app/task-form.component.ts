import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

import { Task } from './task';

@Component({
    selector: 'task-form',
    templateUrl: 'task-form.component.html'
})
export class TaskForm implements OnInit {
    model: Task;

    //Refer for Angular lifecycle: https://angular.io/guide/lifecycle-hooks
    //initialize model with values
    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private location: Location
    ) {
        this.model = new Task(-1, "", "", "", "", "", "", "", "", "");
    }

    //Makes get request to the server and populate tasks
    ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get('id');

        if (id){
            this.http.get('http://localhost:3000/api/task/edit/' + id).subscribe(data => {
                this.model = new Task(data[0]['taskId'],
                    data[0]['name'],
                    data[0]['date'],
                    data[0]['goal'],
                    data[0]['deliverable'],
                    data[0]['priority'],
                    data[0]['startTime'],
                    data[0]['endTime'],
                    data[0]['reminder'],
                    data[0]['process']
                )
            });
        }
    }

    submitted = false;

    //process submitted form
    onSubmit() {
        this.submitted = true;
        this.http.post('http://localhost:3000/api/task/edit/' + this.model.taskId, {
            "taskId": this.model.taskId,
            "name": this.model.name,
            "date": this.model.date,
            "goal": this.model.goal,
            "deliverable": this.model.deliverable,
            "priority": this.model.priority,
            "startTime": this.model.startTime,
            "endTime": this.model.endTime,
            "reminder": this.model.reminder,
            "process": this.model.process
        }).subscribe(data => { });
    }
}