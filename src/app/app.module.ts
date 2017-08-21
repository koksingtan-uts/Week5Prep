//import Angular build-modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import custom modules
import { AppComponent } from './app.component';
import { DailyTasksComponent } from './daily-tasks.component';
import { TaskComponent } from './task.component';
import { TaskForm } from './task-form.component';

//setup routing
const appRoutes: Routes = [
  { path: 'daily-tasks', component: DailyTasksComponent },
  { path: 'task', component: TaskComponent },
  { path: 'task-form', component: TaskForm },
  { path: 'task-form/:id', component: TaskForm},
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DailyTasksComponent,
    TaskComponent,
    TaskForm
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
