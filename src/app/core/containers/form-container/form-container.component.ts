import { UserFormComponent } from './../../components/user-form/user-form.component';
import { User } from './../../../shared/models/User';
import { UserService } from './../../../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.sass']
})
export class FormContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('userForm') userForm: UserFormComponent;
  title = '';
  action = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private toastr: ToastrService,
              private changeRef: ChangeDetectorRef
              ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.route.snapshot.params.id) {
      this.userService.getUser(this.route.snapshot.params.id).subscribe((data) => {
        this.userForm.patchFormValue(data);
      });
      this.action = 'update';
    } else {
      this.userForm.clear();
      this.action = 'create';
  }

    this.getTitle();
    this.changeRef.detectChanges();
}

  getTitle() {
    if (this.action === 'update') {
      this.title = 'Update User';
    } else {
     this.title = 'Create User';
    }
  }

  findUserUsingIdParam() {
    const listOfUsers = this.userService.getListOfUsers() ? this.userService.getListOfUsers() : [];
    // tslint:disable-next-line: radix
    return listOfUsers.find((user) => user.id === parseInt(this.route.snapshot.params.id, 0));
  }

  submitUser(user: User) {
    if (this.action === 'update') {
      this.userService.updateUser(user).subscribe((data) => {
        this.router.navigate(['']);
        this.toastr.success("Update of User is Successful..");
      });

      return;
    }
    this.userService.createUser(user).subscribe((data) => {
      this.router.navigate(['']);
      this.toastr.success("Creation of User is Successful..");
    });
  }

}
