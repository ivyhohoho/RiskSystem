import { UserService } from './../../../services/user.service';
import { User } from './../../../model/user';
import { Role } from './../../../model/role';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

interface DataItem {
  username: string;
  name: string;
  role: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  visible = false;
  loading = false;
  validateForm: FormGroup;
  listOfData: DataItem[] = [];
  errorMessage: string;
  roles = Role;
  roleKeys: string[] = [];
  user: User = new User;
  userEdit = false;
  selectedUser: User;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: ['', [Validators.required]],
      name: [''],
      role: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],

    });
    this.roleKeys = Object.keys(Role);
    this.findAllUsers();
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  findAllUsers() {
    this.loading = true;
    this.adminService.findAllUsers().subscribe(data => {
      this.listOfData = data;
      this.loading = false;
    });
  }

  submitForm(value: { userName: string; email: string; password: string; confirm: string; comment: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  saveUser() {
    if (this.validateForm.valid) {
      this.user = {...this.user, ...this.validateForm.value};
      if (this.userEdit) {
        this.user.id = this.selectedUser.id;
        this.adminService.updateUser(this.user).subscribe(
          data => {
            this.close();
            this.findAllUsers();
          },
          err => {
            this.errorMessage = err.message;
          }
        );
      } else {
        this.userService.register(this.user).subscribe(
          data => {
            this.close();
            this.findAllUsers();
          },
          err => {
            this.errorMessage = err.message;
          }
        );
      }

    }
  }

  newUser(): void {
    this.userEdit = false;
    this.selectedUser = null;
    this.validateForm.reset();
    this.open();
  }

  editUser(user: User): void {
    this.userEdit = true;
    this.selectedUser = user;
    this.validateForm.get('username').setValue(user.username);
    this.validateForm.get('role').setValue(user.role);
    this.validateForm.get('name').setValue(user.name);
    this.open();
  }

  deleteUser(user: User): void {
    this.loading = true;
    this.adminService.deleteUser(user).subscribe(
      () => {
        this.findAllUsers();
      },
      err => {
        this.errorMessage = err.message;
      }
    )
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
