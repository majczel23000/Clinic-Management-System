import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router,
              private http: HttpClient) { }

  // Logowanie użytkownika
  loginUser(username: string, password: string) {
    console.log('logowanie...', username, password);
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['/dashboard']);
      localStorage.setItem('user', username);
    }

    // return this.http.post<any>('http://localhost:3000/login', { username: username, password: password }).subscribe(
    //   res => {
    //     // udalo sie zalogowac
    //     this.router.navigate(['/dashboard']);
    //     localStorage.setItem('user', res);
    //   },
    //   err => {
    //     // nie udalo sie
    //     alert(err);
    //   }
    // )
  }

  // Rejestracja użytkownika
  registerUser(userData: {}){
    console.log('registering...', userData);
    // return this.http.post('http://localhost:3000/users/register', userData);
  }

  // Wyloguj użytkownika
  logoutUser(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  // Sprawdzam, czy jesteśmy zalogowani
  isUserLogged(){
    return localStorage.getItem('user');
  }

}
