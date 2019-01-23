import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';
import { HttpParams } from '@angular/common/http';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private usersService: UsersService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
    });
  }

  get f() { 
    return this.loginForm.controls; 
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.login(this.loginForm.controls.username.value,this.loginForm.controls.password.value)
    .subscribe(
      data => {
        console.log(data);
        localStorage.setItem('access-token', data.access_token);
        // save username
        localStorage.setItem('username', this.loginForm.controls.username.value);
        this.router.navigate(['dashboard']);
      }, 
      error => {
        alert(error.error.error_description);
      }
    );
  }
}
