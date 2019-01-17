import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient) { }

  editUserDetails(userData){
    return this.http.post<any>('http://localhost:3000/users/'+userData.id, userData)
  }

  getUserDetails(id){
    return this.http.get<any>('http://localhost:3000/users/'+id);
  }
}
