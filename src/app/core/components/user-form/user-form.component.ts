import { User } from './../../../shared/models/User';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() selectedUser: User;
  @Output() formValue = new EventEmitter();
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.max(50)]],
      middleName: [''],
      lastName: [''],
      age: [''],
      activeUser: ['']
    });
    // this.listenToForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.form) {
      this.patchFormValue(changes.selectedUser.currentValue);
    }
  }

  patchFormValue(user: User) {
    this.form.patchValue(user);
  }

  listenToForm() {

    this.form.valueChanges.subscribe((data) => {
       console.log(data);
    });
  }

  submit() {
    this.formValue.emit(this.form.value as User);
  }

  clear() {
    this.form.reset();
  }

}
