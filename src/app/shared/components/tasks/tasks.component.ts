import { Component, Input } from '@angular/core';
import { Task } from './task/task.component';

@Component({
    selector: 'app-tasks',
    imports: [Task],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
    @Input({ required: true }) name!: string;
}
