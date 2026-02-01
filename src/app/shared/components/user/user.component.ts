import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-user',
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
    @Input({ required: true }) id!: string;
    @Input({ required: true }) avatar!: string;
    @Input({ required: true }) name!: string;

    @Output() select = new EventEmitter<string>();

    get avatarPath() {
        return `assets/images/${this.avatar}`;
    }

    onSelectedUser() {
        this.select.emit(this.id);
    }
}
