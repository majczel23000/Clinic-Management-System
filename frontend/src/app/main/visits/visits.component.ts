import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

  visits: any[] = [
    {
      date: '2018-03-10',
      description: 'opis 1',
      _id: '123456789'
    },
    {
      date: '2018-03-11',
      description: 'opis 2',
      _id: '12332524564'
    },
    {
      date: '2018-03-12',
      description: 'opis 3',
      _id: '342524354'
    },
    {
      date: '2018-04-10',
      description: 'opis 4',
      _id: '12345adf45'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  detailsVisit(index: number){
    this.router.navigate(['/dashboard/visits/details'], {queryParams: {'id': this.visits[index]._id}});
  }

}
