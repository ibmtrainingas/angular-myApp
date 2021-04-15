import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  title: String = 'Userform';
  firstname: String = 'Ram';
  age: number = 24;
  constructor() { }
  save() {
    console.log('working ...');
    console.log(this.firstname);
    //this.firstname = 'John';
    console.log(this.age);
  }
  ngOnInit(): void {
  }

}
