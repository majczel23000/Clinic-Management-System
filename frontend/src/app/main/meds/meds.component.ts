import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-meds',
  templateUrl: './meds.component.html',
  styleUrls: ['./meds.component.css']
})
export class MedsComponent implements OnInit {

  meds: any[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAllMeds().subscribe(
      res => {
        console.log(res._embedded.medication);
        this.meds = res._embedded.medication;
      },
      err => {
        console.log(err);
      }
    )
  }

}
