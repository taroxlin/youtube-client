import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {
  constructor(public authService: AuthService) { }

  public ngOnInit(): void {

  }
  public logoutClick(): void {
    this.authService.logout();
  }
}
