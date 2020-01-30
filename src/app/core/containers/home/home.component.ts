import { UserService } from './../../../shared/services/user.service';
import { UserFormComponent } from './../../components/user-form/user-form.component';
import { User } from './../../../shared/models/User';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  selectedUser: User;
  listOfUsers: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((user: User[]) => {
      this.listOfUsers = user;
    });
  }

  getSelectedUser(user: User) {
    this.selectedUser = user;
  //  this.userForm.form.patchValue(user);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.id).subscribe(() => {
      this.getUsers();
    });
  }

  getFormValue(form: User){
    console.log(form);
  } 

}
