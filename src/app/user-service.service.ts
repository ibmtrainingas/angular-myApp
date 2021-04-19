import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
const URL = 'http://localhost:8080/user'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  save(user: User) {
    return this.http.post(URL, user, {
      headers: { "content-type": 'application/json' }
    });
  }

  getAllUsers() {
    return this.http.get(URL);
  }

  delete(userId: number) {
    return this.http.delete(URL + '/' + userId);

  }
}
