import { User } from './model/user';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './model/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentUser: User;
  roles = Role;
  isCollapsed = false;

  constructor(public userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.currentUser.subscribe(
      data => {
        this.currentUser = data;
      }
    );
  }

  logout() {
    this.userService.logOut().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }
}
