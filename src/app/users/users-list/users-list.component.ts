import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  @Input() usersList: User[];
  @Output() userDeleted: EventEmitter<User>;

  constructor() {
    this.userDeleted = new EventEmitter<User>();
  }

  deleteUser(user: User) {
    this.userDeleted.emit(user);
  }

}
