import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-med-add',
  templateUrl: './med-add.component.html',
  styleUrls: ['./med-add.component.css']
})
export class MedAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

    ngOnInit() {
      this.registerForm = new FormGroup({
        name: new FormControl('',[
          Validators.required
        ]),
        description: new FormControl('',[
          Validators.required,
          Validators.minLength(20)
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
  
      const medData = {
        name: this.registerForm.value.name,
        description: this.registerForm.value.description
      }
  
      console.log(medData);
    }

}
