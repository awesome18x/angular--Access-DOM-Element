import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from './user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  authForm: FormGroup;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.authForm = this.fb.group({
      email: [null, Validators.email],
      password: [null, Validators.minLength(5)]
    });
  }

  // onSubmit(value: User) {
  //   this.submitted.emit(value);
  // }
  onSubmit() {
    this.submitted.emit(this.authForm.value);
  }

  get f() {
    return this.authForm.get('email');
  }


}
