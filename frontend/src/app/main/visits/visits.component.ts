import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

  visits: any[];
  
  constructor(private router: Router, private usersService : UsersService, private loginService: LoginService) { }

  ngOnInit() {
    this.usersService.getVisit().subscribe(
      res => {
        console.log(res._embedded.appointment);
        this.visits = res._embedded.appointment;
      },
      err => {
        console.log(err);
      }
    )
  }

  detailsVisit(index: number){
    this.router.navigate(['/dashboard/visits/details'], {queryParams: {'id': this.visits[index]._id}});
  }

}
