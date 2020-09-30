import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class GuardsGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if ( this.authService.isLoggedIn() ) {
        return true;
      } else {
        window.alert('You don`t have permission to use this page Log In first!!!');
        return false;
      }
  }
}
