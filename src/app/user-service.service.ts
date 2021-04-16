import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  save(user: User) {
    return this.http.post('http://localhost:8080/user', user, {
      headers: { "content-type": 'application/json' }
    });
  }
}
