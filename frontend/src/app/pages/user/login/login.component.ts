import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User;
  validateForm!: FormGroup;
  errorMessage: string;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.user.username = this.validateForm.get('userName').value;
      this.user.password = this.validateForm.get('password').value;
      this.userService.login(this.user).subscribe(
        () => {
          this.router.navigate(['/report']);
        },
        () => {
          this.errorMessage = "Username or password is incorrect.";
        }
      );
    }
  }

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
