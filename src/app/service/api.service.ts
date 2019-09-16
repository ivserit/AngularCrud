import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {users} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://apiusers.azurewebsites.net/api/users/';


  getUsers() : Observable<users[]> {
    return this.http.get<users[]>(this.baseUrl);
  }

  getUserById(id: number): Observable<users> {
    return this.http.get<users>(this.baseUrl + id);
  }

  createUser(user: users): Observable<users> {
    return this.http.post<users>(this.baseUrl, user);
  }

  updateUser(user: users): Observable<users> {
    return this.http.put<users>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<users> {
    return this.http.delete<users>(this.baseUrl + id);
  }
}
