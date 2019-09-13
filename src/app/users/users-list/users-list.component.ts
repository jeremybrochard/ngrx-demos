import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  @Input() usersList: User[];

  constructor() { }

  deleteUser(user: User) {
    const index = this.usersList.findIndex(u => u.id === user.id);
    if (index > -1) {
      this.usersList.splice(index, 1);
    }
  }

}
