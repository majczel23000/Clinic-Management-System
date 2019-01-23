import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  visibility = true;

  dataToEdit = {
    name: '',
    surname: '',
    email: '',
    pesel: '',
    id: ''
  }

  user: any;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // get logged username
    this.usersService.getUsers().subscribe(
      res => {
        for (let i = 0; i < res.length; i++){
          if (localStorage.getItem('username') === res[i].username){
            localStorage.setItem('user', JSON.stringify(res[i]));
            this.user = res[i];
          }
        }
      },
      err => {
        console.log(err);
      }
    )
    // get logged username
    this.usersService.getDoctors().subscribe(
      res => {
        for (let i = 0; i < res.length; i++){
          if (localStorage.getItem('username') === res[i].username){
            localStorage.setItem('user', JSON.stringify(res[i]));
            this.user = res[i];
          }
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  showEditForm(){
    this.visibility = false;
  }

  saveNewData(){
    // if(this.dataToEdit.name == '' || this.dataToEdit.surname == '' || this.dataToEdit.email == '' || this.dataToEdit.pesel == ''){
    //   alert("Proszę wypełnić wszystkie pola");
    // } else {
      this.dataToEdit.id = this.user.id;
      console.log(this.user);
      this.usersService.editUserDetails(this.user).subscribe(
        res => {
          console.log(res);
          this.visibility = true;
          this.getUserDetails();
        },
        err => {
          console.log(err);
          this.visibility = true;
        }
      )
    //}
    
  }

  getUserDetails(){
    this.usersService.getUserDetails(this.user.id).subscribe(
      res => {
        this.user = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  onKey(event: any) { // without type info
    if(event.target.value==""){
      event.target.style.backgroundColor="#ffcccc";
    }
    else{
      event.target.style.backgroundColor="#b3ffb3";
    }
  }
  setDefault(event){
    if(event.target.value==""){
      event.target.style.backgroundColor="#ffcccc";
    }
    else{
      event.target.style.backgroundColor="white";
      event.target.style.border="1px solid black";
    }
  }

}
