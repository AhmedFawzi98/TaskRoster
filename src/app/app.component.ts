import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserComponent } from './shared/components/user/user.component';
import { DUMMY_USERS } from './shared/static/dummy-users';
import { TasksComponent } from './shared/components/tasks/tasks.component';
import { User } from './shared/models/user.model';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponenet {
    users: User[] = DUMMY_USERS;
    selectedUserId?: string;

    get selectedUser() {
        return DUMMY_USERS.find((u) => u.id === this.selectedUserId);
    }

    onSelectUser(id: string) {
        this.selectedUserId = id;
    }
}
