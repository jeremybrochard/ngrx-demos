import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    // return this.httpClient.get<User[]>('assets/mock/error.json'); // returns HTTP 404 Error
    // return this.httpClient.get<User[]>('assets/mock/emptyUsersList.json'); // return empty users list
    return this.httpClient.get<User[]>('assets/mock/users.json'); // return filled users list
  }
}
