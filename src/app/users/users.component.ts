import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser, deleteUser } from './reducer/users.actions';
import { getUsersList } from './reducer/users.selectors';
import { User } from './user.model';
import { State } from '../reducers';

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
