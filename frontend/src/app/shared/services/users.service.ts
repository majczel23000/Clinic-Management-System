import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient) { }

  editUserDetails(userData){
    return this.http.post<any>('patient', userData)
  }

  editDoctorDetails(userData){
    return this.http.post<any>('doctor', userData)
  }

  getDoctorDetails(id){
    return this.http.get<any>('doctor/'+id);
  }
  
  getPatientDetails(id){
    return this.http.get<any>('patient/'+id);
  }

  getUserDetails(id){
    return this.http.get<any>('patient/'+id);
  }

  addDoctor(doctorData){
    return this.http.post<any>('register', doctorData);
  }

  activateDoctor(id){
    return this.http.get<any>('register/'+id+'/activate');
  }

  getAllMeds(){
    return this.http.get<any>('medication');
  }

  addMed(medData){
    return this.http.post<any>('medication', medData);
  }

  getUsers(){
    return this.http.get<any>('patient');
  }

  getDoctors(){
    return this.http.get<any>('doctor');
  }

  getPatients(){
    return this.http.get<any>('patient');  
  }

  addVisit(data){
    return this.http.post<any>('appointment', data);
  }

  getVisit(){
    return this.http.get<any>('appointment');
  }
}
