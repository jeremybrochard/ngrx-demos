import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: User[];

  constructor() {}

  ngOnInit() {
    this.usersList = this.initializeUsersList();
  }

  addUserToList(newUser: User) {
    this.usersList.push({...newUser, id: this.usersList.length + 1});
  }

  private initializeUsersList(): User[] {
    return [
      new User(1, 'Jérémy', 'Brochard'),
      new User(2, 'Alphonse', 'Blum'),
      new User(3, 'Jean', 'Jacques')
    ];
  }

}
