import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors: any[] = [
    {
      firstName: 'Adam',
      lastName: 'Adamek',
      _id: '123456789'
    },
    {
      firstName: 'Tomasz',
      lastName: 'Nowak',
      _id: '12332524564'
    },
    {
      firstName: 'Karol',
      lastName: 'Piaśnik',
      _id: '342524354'
    },
    {
      firstName: 'Piotr',
      lastName: 'Kowalski',
      _id: '12345adf45'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  detailsUser(index: number){
    this.router.navigate(['/dashboard/doctors/details'], {queryParams: {'id': this.doctors[index]._id}});
  }

}
