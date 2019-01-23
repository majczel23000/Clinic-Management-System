import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-visits-add',
  templateUrl: './visits-add.component.html',
  styleUrls: ['./visits-add.component.css']
})
export class VisitsAddComponent implements OnInit {

  doctors: any;
  selectedDoctor = null;
  description: any;
  private currentDate: string = new Date().toISOString().substring(0, 10);
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getDoctors().subscribe(
      res => {
        this.doctors = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  onChange(e){
    this.selectedDoctor = this.doctors[e.split(".")[0]].id;
    console.log(this.selectedDoctor);
  }

  onSubmit(){
    let data = (<HTMLInputElement>document.getElementById('myDate')).value;
    let desc = (<HTMLInputElement>document.getElementById('description')).value;
    if(this.selectedDoctor != null && data != "" && this.description != ''){
      if(Date.parse(this.currentDate) > Date.parse(data)){
        alert("Select date from future");
      } else {
        let dataToSend = {
          "description": desc,
          "patient": {
            "id": JSON.parse(localStorage.getItem('user')).id
          },
          "doctor": {
            "id": this.selectedDoctor
          },
          "medications": [],
          "date": new Date(data),
        }
        console.log(dataToSend);
        this.usersService.addVisit(dataToSend).subscribe(
          res => {
            alert('Visit added');
            console.log(res);
          },
          err => {
            console.log(err);
          }
        )
      }
      
    } else {
      alert("Prosze uzupełnić wszystkie pola");
    }
  }

}
