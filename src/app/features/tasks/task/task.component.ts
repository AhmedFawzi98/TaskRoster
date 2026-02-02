import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    standalone: false,
})
export class TaskComponent {
    @Input({ required: true }) task!: Task;
    @Output() complete = new EventEmitter<string>();

    onComplete() {
        this.complete.emit(this.task.id);
    }
}
