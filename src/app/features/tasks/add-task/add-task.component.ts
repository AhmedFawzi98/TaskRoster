import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTaskFormValue } from '../models/add-task-form-value.model';

@Component({
    selector: 'app-add-task',
    imports: [FormsModule],
    templateUrl: './add-task.component.html',
    styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
    @Output() cancel = new EventEmitter<void>();
    @Output() add = new EventEmitter<AddTaskFormValue>();
    titleInput = '';
    summaryInput = '';
    dueDateInput = '';

    onCancelAddTask() {
        this.cancel.emit();
    }

    onSubmit() {
        const addedTask: AddTaskFormValue = {
            title: this.titleInput,
            summary: this.summaryInput,
            dueDate: this.dueDateInput,
        };
        this.add.emit(addedTask);
    }
}
