import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserComponent } from './shared/components/user/user.component';
import { DUMMY_USERS } from './shared/static/dummy-users';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, UserComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponenet {
    users = DUMMY_USERS;

    onSelectUser(id: string) {
        console.log(id);
    }
}
