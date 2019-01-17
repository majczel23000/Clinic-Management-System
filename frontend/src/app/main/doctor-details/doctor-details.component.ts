import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  doctorID: string;
  visibility = false;
  passwordLength = false;

  doctor: any = {
    firstName: 'Piotr',
    lastName: 'Kowalski',
    _id: '12345adf45',
    email: 'adam@adam.pl'
  }
  constructor(private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.doctorID = params.id;
      console.log(this.doctorID);
    });
  }

  // Shows form to edit doctor data
  showEditForm() {
    this.visibility = true;
  }

  // After saving changes in editing
  editDoctorData(doctorData) {
    if (doctorData.password === '') {
      delete doctorData.password;
      delete doctorData.confirmPassword;
    }
    console.log(doctorData);
    // this.doctorsService.editUser(this.doctor._id, doctorData).subscribe(
    //   res => {
    //     console.log('EDITED DOCTOR: ', res);
    //     this.visibility = false;
    //       this.doctorsService.getDoctorDetails(res.updatedDocumentID).pipe(first()).subscribe(
    //         doctor => {
    //           console.log('USER DETAILS: ', doctor);
    //           this.doctor = doctor;
    //         },
    //         err2 => {
    //           console.log(err2);
    //         }
    //       );
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }
}
