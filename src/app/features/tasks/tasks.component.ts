import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../users/models/user.model';
import { DUMMY_TASKS } from '../../shared/static/dummy-tasks';
import { Task } from './models/task.model';
@Component({
    selector: 'app-tasks',
    imports: [TaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
    @Input({ required: true }) selectedUser!: User;

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

    onAddTask() {
        const maxTaskId = Number(this.tasks.at(-1)?.id);
        const addedTask: Task = {
            id: `${maxTaskId + 1}`,
            userId: this.selectedUser.id,
            title: `title of task #${maxTaskId + 1}`,
            summary: `summary of task #${maxTaskId + 1}`,
            dueDate: new Date('2026-02-28'),
        };

        this.tasks.push(addedTask);
    }
}
