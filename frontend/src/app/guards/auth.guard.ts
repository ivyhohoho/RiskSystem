import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from "../model/user";
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  currentUser: User;
  constructor(private router: Router,
  private userService: UserService){
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.currentUser){
      // add first login logic
      if (this.currentUser.firstLogin) {
        this.userService.firstLogined();
        if (this.currentUser.role == Role.IT_USER_ADMIN) {
          this.router.navigate(['/profile']);
        }
        if (this.currentUser.role == Role.IT_SYSTEM_ADMIN) {
          this.router.navigate(['/system-var']);
        }
        if (this.currentUser.role == Role.MARKET_RISK_ADMIN) {
          this.router.navigate(['/market-risk-var']);
        }
        if (this.currentUser.role == Role.MARKET_RISK_REPORT_VIEWER) {
          this.router.navigate(['/report']);
        }
        return true;
      }
      //check if route is restricted by role...
      if(route.data.roles && route.data.roles.indexOf(this.currentUser.role) === -1){
        this.router.navigate(['/403']);
        return false;
      }

      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
