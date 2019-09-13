import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './user.model';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { Observable } from 'rxjs';
import { getUsersList } from './reducer/users.selectors';
import { addUser, deleteUser } from './reducer/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: Observable<User[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.usersList = this.initializeUsersList();
  }

  addUser(newUser: User) {
    this.store.dispatch(addUser(newUser));
  }

  deleteUser(userToDelete: User) {
    this.store.dispatch(deleteUser(userToDelete.id));
  }

  private initializeUsersList(): Observable<User[]> {
    return this.store.pipe(select(getUsersList));
  }
}
