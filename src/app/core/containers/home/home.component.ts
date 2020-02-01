import { UserService } from './../../../shared/services/user.service';
import { UserFormComponent } from './../../components/user-form/user-form.component';
import { User } from './../../../shared/models/User';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { UserState } from '../../states/user.state';
import { GetUsers } from '../../actions/user.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @Select(UserState.getListOfUsers) getListOfUsers$: Observable<User[]>;
  selectedUser: User;
  listOfUsers: User[] = [];
  constructor(private store: Store, private userService: UserService) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers);
    this.getUsers();
  }

  ngAfterViewInit() {
   }
  getUsers() {
    this.getListOfUsers$.subscribe((users: User[]) => {
      this.listOfUsers = users;
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
