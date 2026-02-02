import { Component, Input, Output, EventEmitter } from '@angular/core';
import { required } from '@angular/forms/signals';
import { Task } from '../models/task.model';
import { CardComponent } from '../../../shared/components/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-task',
    imports: [CardComponent, DatePipe],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
})
export class TaskComponent {
    @Input({ required: true }) task!: Task;
    @Output() complete = new EventEmitter<string>();
    onComplete() {
        this.complete.emit(this.task.id);
    }
}
