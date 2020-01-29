import { UserFormComponent } from './../../components/user-form/user-form.component';
import { User } from './../../../shared/models/User';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @ViewChild('userForm') userForm: UserFormComponent;
  user1: User = {
    firstName: 'Seiji',
    lastName: 'Villafranca',
    age: 40,
    activeUser: false
  };
  user2: User = {
    firstName: 'user2',
    lastName: 'second user',
    age: 40,
    activeUser: true
  };
  listOfUsers: Array<User> = [this.user1, this.user2];
  constructor() { }

  ngOnInit() {
  }

  selectedUser(user: User) {
   this.userForm.form.patchValue(user);
  }

  getFormValue(form: User){
    console.log(form);
  } 

}
