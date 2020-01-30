import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs';
const ENDPOINT_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  listOfUsers: User[];
  constructor(private http: HttpClient) { }

  setListOfUsers(users: User[]) {
    this.listOfUsers = users;
  }
  getListOfUsers(): User[] {
    return this.listOfUsers;
  }

  getUsers(): Observable<User[]> {
    return this.http.get(`${ENDPOINT_URL}/users`).pipe(
      // tap function from rxjs
      tap((users: User[]) => {
        return users;
      }),
      // catchError from rxjs
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getUser(id): Observable<User> {
    return this.http.get(`${ENDPOINT_URL}/users/${id}`).pipe(
      // tap function from rxjs
      tap((users: User) => {
        return users;
      }),
      // catchError from rxjs
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  createUser(user: User) {
    return this.http.post(`${ENDPOINT_URL}/users`, user).pipe(
      tap((data) => {
        return data;
      }, 
      catchError((error) => {
        return throwError(error);
      })
      )
    );
  }

  updateUser(user: User) {
    return this.http.put(`${ENDPOINT_URL}/users/${user.id}`, user).pipe(
      tap((data) => {
        return data;
      },
      catchError((error) => {
        return throwError(error);
      })
      )
    );
  }

  deleteUser(id) {
    return this.http.delete(`${ENDPOINT_URL}/users/${id}`).pipe(
      tap((data) => {
        return data;
      },
      catchError((error) => {
        return throwError(error);
      })
      )
    );

  }
}
