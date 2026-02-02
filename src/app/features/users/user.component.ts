import { Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from './models/user.model';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
    selector: 'app-user',
    imports: [CardComponent],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
    @Input({ required: true }) user!: User;
    @Input({ required: true }) isSelected!: boolean;

    @Output() select = new EventEmitter<string>();

    get avatarPath() {
        return `assets/images/${this.user.avatar}`;
    }

    onSelectedUser() {
        this.select.emit(this.user.id);
    }
}
