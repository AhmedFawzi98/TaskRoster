import { DUMMY_TASKS } from '../../shared/static/dummy-tasks';
import { Task } from './models/task.model';
import { AddTaskFormValue } from './models/add-task-form-value.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks: Task[];

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks).map(this.normalizeTask);
        } else {
            this.tasks = DUMMY_TASKS.map((t) => ({
                id: t.id,
                userId: t.userId,
                title: t.title,
                summary: t.summary,
                dueDate: new Date(t.dueDate),
            }));
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter((t) => t.userId === userId);
    }

    addTask(taskToAdd: AddTaskFormValue, userId: string) {
        const maxTaskId = Number(this.tasks.at(-1)!.id);
        const task: Task = {
            id: `${maxTaskId + 1}`,
            userId: userId,
            title: taskToAdd.title,
            summary: taskToAdd.summary,
            dueDate: new Date(taskToAdd.dueDate),
        };

        this.tasks.push(task);
        this.saveTasks();
    }

    removeTask(taskId: string) {
        const completedTaskIndex = this.tasks.findIndex((t) => t.id === taskId);
        if (completedTaskIndex !== -1) {
            this.tasks.splice(completedTaskIndex, 1);
        }
        this.saveTasks();
    }

    private normalizeTask(t: any) {
        return {
            id: t.id,
            userId: t.userId,
            title: t.title,
            summary: t.summary,
            dueDate: new Date(t.dueDate),
        };
    }

    private saveTasks() {
        const tasks = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasks);
    }
}
