import { User } from './../../../shared/models/User';
import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @Input() users: Array<User> = [];
  @Output() selectedUser = new EventEmitter();
  constructor() { }

  ngOnInit(){}
  ngAfterViewInit() {}
  ngOnDestroy() {}
  ngOnChanges() {}

  selectUser(user: User) {
    this.selectedUser.emit(user);
  }
}
