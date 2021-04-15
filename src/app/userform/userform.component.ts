import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit { //Controller
  title: String = 'Userform';
  user: User = new User(); //Model
  userArray: User[] = [];

  constructor() { }
  save() {
    this.userArray.push(this.user);
    console.log('working ...');
    console.log(this.user.firstname);
    //this.user.firstname = 'John';
    console.log(this.user.age);
  }
  ngOnInit(): void {
  }

}
