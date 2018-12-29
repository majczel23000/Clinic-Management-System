import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

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
    private router: Router) { }

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

    this.loginService.loginUser(this.loginForm.value.username, this.loginForm.value.password);
  }

}
