import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../users/models/user.model';
import { DUMMY_TASKS } from '../../shared/static/dummy-tasks';
import { Task } from './models/task.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddTaskFormValue } from './models/add-task-form-value.model';
@Component({
    selector: 'app-tasks',
    imports: [TaskComponent, AddTaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
    @Input({ required: true }) selectedUser!: User;
    isAddingTask = false;

    tasks: Task[] = DUMMY_TASKS.map((t) => ({
        id: t.id,
        userId: t.userId,
        title: t.title,
        summary: t.summary,
        dueDate: new Date(t.dueDate),
    }));

    get selectedUserTasks() {
        return this.tasks.filter((t) => t.userId === this.selectedUser.id);
    }

    onCompleteTask(completedTaskId: string) {
        const completedTaskIndex = this.tasks.findIndex((t) => t.id === completedTaskId);
        if (completedTaskIndex !== -1) {
            this.tasks.splice(completedTaskIndex, 1);
        }
    }

    onStartAddTask() {
        this.isAddingTask = true;
    }

    onCancelAddTask() {
        this.isAddingTask = false;
    }

    onAddTask(addedTask: AddTaskFormValue) {
        const maxTaskId = Number(this.tasks.at(-1)!.id);
        const task: Task = {
            id: `${maxTaskId + 1}`,
            userId: this.selectedUser.id,
            title: addedTask.title,
            summary: addedTask.summary,
            dueDate: new Date(addedTask.dueDate),
        };

        this.tasks.push(task);
        this.isAddingTask = false;
    }
}
