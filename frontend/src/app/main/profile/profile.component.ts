import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  visibility = true;

  user = {
    id: '123456789',
    firstName: 'Michal',
    lastName: 'Razny',
    email: 'michal@razny.pl',
    pesel: '12345678912'
  }

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // metoda na starcie do pobierania naszych danych od Karola, albo od razu je będzie zwracać
  }

  showEditForm(){
    this.visibility = false;
  }

  saveNewData(){
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
