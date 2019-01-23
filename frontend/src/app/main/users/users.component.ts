import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  patients: any;

  constructor(private router: Router,
    private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getPatients().subscribe(
      res => {
        this.patients = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  detailsUser(index: number){
    this.router.navigate(['/dashboard/patients/details'], {queryParams: {'id': this.patients[index].id}});
  }

}
