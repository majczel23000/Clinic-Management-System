import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  patientID: string;
  visibility = false;
  passwordLength = false;

  patient: any ;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private usersService: UsersService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.patientID = params.id;
    });
    this.usersService.getPatientDetails(this.patientID).subscribe(
      res => {
        this.patient = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  // Shows form to edit doctor data
  showEditForm() {
    this.visibility = true;
  }

  // After saving changes in editing
  editDoctorData(patientData) {
    if (patientData.password === '') {
      delete patientData.password;
      delete patientData.confirmPassword;
    }
    console.log(this.patient);
    this.patient.id=this.patientID;
    this.usersService.editUserDetails(this.patient).subscribe(
      res => {
        alert("Data successfully modified!");
        console.log(res);
        this.router.navigate(['/dashboard/patients']);
      },
      err => {
        console.log(err);
      }
    )
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

  activateDoctor(){
    this.usersService.activateDoctor(this.patientID).subscribe(
      res => {
        this.usersService.getPatientDetails(this.patientID).subscribe(
          res2 => {
            this.patient = res2;
          },
          err2 => {
            console.log(err2);
          }
        )
      },
      err => {
        console.log(err);
      }
    )
  }

}
