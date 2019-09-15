import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser, deleteUser, fetchUsers } from './reducer/users.actions';
import { getUsersList, getUsersLoadingStatus, getUsersErrorMessage } from './reducer/users.selectors';
import { User } from './user.model';
import { State } from '../reducers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: Observable<User[]>;
  isLoading: Observable<boolean>;
  errorMessage: Observable<string>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.initializeUsersList();
    this.usersList = this.getUsersList();
    this.isLoading = this.getLoadingStatus();
    this.errorMessage = this.getErrorMessage();
  }

  addUser(newUser: User) {
    this.store.dispatch(addUser(newUser));
  }

  deleteUser(userToDelete: User) {
    this.store.dispatch(deleteUser(userToDelete.id));
  }

  private initializeUsersList() {
    this.store.dispatch(fetchUsers());
  }

  private getUsersList(): Observable<User[]> {
    return this.store.pipe(select(getUsersList));
  }

  private getLoadingStatus(): Observable<boolean> {
    return this.store.pipe(select(getUsersLoadingStatus));
  }

  private getErrorMessage(): Observable<string> {
    return this.store.pipe(select(getUsersErrorMessage));
  }
}
