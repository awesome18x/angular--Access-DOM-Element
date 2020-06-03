import { Component } from '@angular/core';
import { User } from './auth-form/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular9';
  remeberMe: boolean = false;
  createUser(user: User) {
    console.log('Create account', user);
  }

  rememberUser(value: boolean) {
    this.remeberMe = value;
  }

  loginUser(user: User) {
    console.log('Login', user, this.remeberMe);
  }

}
