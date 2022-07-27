import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../data';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  users?: User[];
  hide = true;
  loginBoxFormGroup!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public activatedrout: ActivatedRoute,
    public router: Router,
    public loginService: LoginService
  ) {}
  ngOnInit(): void {
    this.loginBoxFormGroup = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }
  
  getEmailErrorMessage() {
    if (this.loginBoxFormGroup.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginBoxFormGroup.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordErrorMessage() {
    if (this.loginBoxFormGroup.get('password')?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginBoxFormGroup.get('password')?.hasError('minlength') ? 'Password contains atleast 6 Characters' : '';
  }
  login(): void {
    if (this.loginBoxFormGroup?.value) {
      const email = this.loginBoxFormGroup.get('email');
      const password = this.loginBoxFormGroup.get('password');
      if (email && password) {
        this.loginService.updateLoginUser(email.value, password.value);
      }
    }
  }
 
}