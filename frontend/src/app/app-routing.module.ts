import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './model/role';
import { UnathorizedComponent } from './pages/error/unathorized/unathorized.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { DetailComponent } from './pages/user/detail/detail.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },

  //User pages
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard]
  },
  {path: 'detail', component: DetailComponent},
  {path: 'detail/:id', component: DetailComponent},

  //admin panel
  {path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path: 'user-list',
  component: UserListComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },

   //error pages
   {path: '404', component: NotFoundComponent},
   {path: '401', component: UnathorizedComponent},
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    }
  }
}
