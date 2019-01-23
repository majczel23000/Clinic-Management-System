import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private usersService: UsersService) { }

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
      ]),
      email: new FormControl('',[
        Validators.email,
        Validators.required
      ]),
      pesel: new FormControl('',[
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
      name: this.registerForm.value.firstName,
      surname: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      pesel: this.registerForm.value.pesel,
      type: 'patient'
    }
    console.log(userData);
    this.usersService.addDoctor(userData).subscribe(
      res => {
        alert('Patient added successfully');
        this.router.navigate(['/dashboard/patients'])
      },
      err => {
        console.log(err);
      }
    )
  }

}
