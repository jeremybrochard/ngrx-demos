import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, flatMap, map } from 'rxjs/operators';
import { UsersService } from '../users.service';
import { fetchUsersError, fetchUsersSuccessfully } from './users.actions';
import { FETCH_USERS } from './users.constants';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UsersEffects {
  @Effect()
  users = this.actions.pipe(
    ofType(FETCH_USERS),
    flatMap(action => this.usersService.getUsers()),
    delay(3000),
    map(users => fetchUsersSuccessfully(users)),
    catchError((error: HttpErrorResponse) => of(fetchUsersError(error.message)))
  );

  constructor(private actions: Actions, private usersService: UsersService) {}
}
