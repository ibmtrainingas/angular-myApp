import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  title: String = 'Userform';
  firstname: String = 'Ram';
  constructor() { }

  ngOnInit(): void {
  }

}
