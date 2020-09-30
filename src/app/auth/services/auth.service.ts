import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;

  constructor() {
    if ( localStorage.getItem('authToken') ) {
      this.token = localStorage.getItem('authToken');
    }
  }

  public isLoggedIn(): boolean {
    return !!this.token;
  }

  public login(form: FormGroup): boolean {
    if (form.status === 'VALID') {
      this.token = 'd123d';
      localStorage.setItem('authToken', this.token);
      return true;
    }
  }
  public logout(): void {
    console.log('LOGGIN OUT');
    localStorage.removeItem('authToken');
    this.token = '';
  }
}
