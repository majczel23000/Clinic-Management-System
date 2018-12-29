import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      firstName: new FormControl('',[
        Validators.required
      ]),
      lastName: new FormControl('',[
        Validators.required
      ])
    });
  }

  get f() { 
    return this.registerForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const userData = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName
    }

    this.loginService.registerUser(userData);
    
  }

}
