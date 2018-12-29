import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  // Logowanie użytkownika
  loginUser(username: string, password: string) {
    console.log('logowanie...', username, password);
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['/dashboard']);
      localStorage.setItem('user', username);
    }
  }

  // Rejestracja użytkownika
  registerUser(userData: Object){
    console.log('registering...', userData);
  }

  // Wyloguj użytkownika
  logoutUser(){
    localStorage.removeItem('user');
  }

  // Sprawdzam, czy jesteśmy zalogowani
  isUserLogged(){
    return localStorage.getItem('user');
  }

}
