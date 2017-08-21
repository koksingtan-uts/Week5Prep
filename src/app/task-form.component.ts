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

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private location: Location
    ) {
        this.model = new Task(4, "", "", "", "", "", "", "", "", "");
    }

    ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get('id');

        this.http.get('http://localhost:3000/api/task/edit/' + id).subscribe(data => {
            this.model = new Task(data['id'],
                data['name'],
                data['date'],
                data['goal'],
                data['deliverable'],
                data['priority'],
                data['starttime'],
                data['endtime'],
                data['reminder'],
                data['process']
            )
        });
    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
        this.http.post('http://localhost:3000/api/task/edit/' + this.model.id, {
            "id": this.model.id,
            "name": this.model.name,
            "date": this.model.date,
            "goal": this.model.goal,
            "deliverable": this.model.deliverable,
            "priority": this.model.priority,
            "starttime": this.model.starttime,
            "endtime": this.model.endtime,
            "reminder": this.model.reminder,
            "process": this.model.process
        }).subscribe(data => {

        });
        this.location.back();
    }
}