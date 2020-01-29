import { User } from './../../../shared/models/User';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements OnInit {
  @Output() formValue = new EventEmitter();
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.max(50)]],
      middleName: [''],
      lastName: [''],
      age: [''],
      activeUser: ['']
    });
    this.listenToForm();
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
