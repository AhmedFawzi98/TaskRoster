import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../users/models/user.model';
import { AddTaskFormValue } from './models/add-task-form-value.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    imports: [TaskComponent, AddTaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
    @Input({ required: true }) selectedUser!: User;
    isAddingTask = false;
    constructor(private tasksService: TasksService) {}
    get selectedUserTasks() {
        return this.tasksService.getUserTasks(this.selectedUser.id);
    }

    onCompleteTask(completedTaskId: string) {
        this.tasksService.removeTask(completedTaskId);
    }

    onStartAddTask() {
        this.isAddingTask = true;
    }

    onCancelAddTask() {
        this.isAddingTask = false;
    }

    onAddTask(addedTask: AddTaskFormValue) {
        this.tasksService.addTask(addedTask, this.selectedUser.id);
        this.isAddingTask = false;
    }
}
