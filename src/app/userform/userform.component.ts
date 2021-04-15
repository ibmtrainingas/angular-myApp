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
    this.userArray.push(Object.assign({}, this.user)); //Creates an object, and passes all the properties of the original object to that new Object
    console.log('working ...');
    console.log(this.user.firstname);
    //this.user.firstname = 'John';
    console.log(this.user.age);
  }
  ngOnInit(): void {
  }

}
