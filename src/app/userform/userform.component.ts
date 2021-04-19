import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit { //Controller
  title: String = 'Userform';
  user: User = new User(); //Model
  userArray: any;

  constructor(private userService: UserServiceService) { }

  deleteUser(userId: number, index: number) {
    const observable = this.userService.delete(userId);
    observable.subscribe(response => this.userArray.splice(index, 1));

  }

  save() {
    const promise = this.userService.save(this.user);
    promise.subscribe(response => {
      console.log(response);
      this.user.id = response;
      alert("User added..");
      this.userArray.push(Object.assign({}, this.user)); //Creates an object, and passes all the properties of the original object to that new Object
    },
      error => {
        console.log(error);
        alert(error.statusText);
      }

    )
  }
  ngOnInit(): void {
    const observable = this.userService.getAllUsers();
    observable.subscribe(response => {

      console.log(response)
      this.userArray = response
    }
    );
  }

}
