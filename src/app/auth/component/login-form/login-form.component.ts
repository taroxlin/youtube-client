import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, public router: Router) {
  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    if ( this.authService.login(this.loginForm) ) {
      this.router.navigate(['']);
    }
  }
}
