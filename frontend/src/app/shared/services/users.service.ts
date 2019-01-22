import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient) { }

  editUserDetails(userData){
    return this.http.post<any>('users/'+userData.id, userData)
  }

  getUserDetails(id){
    return this.http.get<any>('users/'+id);
  }

  addDoctor(doctorData){
    return this.http.post<any>('users', {doctorData});
  }

  getAllMeds(){
    return this.http.get<any>('meds');
  }

  addMed(medData){
    return this.http.post<any>('meds', medData);
  }
}
