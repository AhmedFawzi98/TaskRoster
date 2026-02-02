import { NgModule } from '@angular/core';
import { AppComponenet } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './features/users/users.module';
import { TasksModule } from './features/tasks/tasks.module';

@NgModule({
    declarations: [AppComponenet],
    bootstrap: [AppComponenet],
    imports: [BrowserModule, RouterOutlet, SharedModule, UsersModule, TasksModule],
})
export class AppModule {}
