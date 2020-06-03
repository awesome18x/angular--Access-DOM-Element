import { AuthMessageComponent } from './auth-message.component';
import { AuthRememberComponent } from './auth-remember.component';
import { Component, OnInit, EventEmitter, Output, ContentChild, AfterContentInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { User } from './user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit, AfterContentInit, AfterViewInit {
  authForm: FormGroup;
  showMessage: boolean;
  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
  @ViewChild(AuthMessageComponent) mesage: AuthMessageComponent;
  @ViewChild('email') email: ElementRef;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private fb: FormBuilder,
    private renderer2: Renderer2
    ) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      email: [null, Validators.email],
      password: [null, Validators.minLength(5)]
    });
  }

   ngAfterContentInit(): void {
  //   console.log(this.remember);
  //   if (this.remember) {
  //     this.remember.checked.subscribe((checked: boolean) => {
  //       this.showMessage = checked;
  //     });
  //   }
  }

  ngAfterViewInit() {
    console.log(this.mesage);
    // this.email.nativeElement.value = 'Tony Stark';
    // console.log(this.email.nativeElement);
    // this.email.nativeElement.setAttribute('placeholder', 'Vui lofng nhap email');
    this.renderer2.setElementAttribute(this.email.nativeElement, 'placeholder', 'Nhap email...');
  }

  onSubmit() {
    this.submitted.emit(this.authForm.value);
  }

  get f() {
    return this.authForm.get('email');
  }


}
