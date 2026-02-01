import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserComponent } from './features//users/user.component';
import { DUMMY_USERS } from './shared/static/dummy-users';
import { TasksComponent } from './features/tasks/tasks.component';
import { User } from './features/users/models/user.model';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponenet {
    users: User[] = DUMMY_USERS;
    selectedUser?: User;

    onSelectUser(id: string) {
        this.selectedUser = DUMMY_USERS.find((u) => u.id === id);
    }
}
