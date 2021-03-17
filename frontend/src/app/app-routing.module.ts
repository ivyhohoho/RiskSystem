import { UnauthorizedComponent } from './pages/error/unauthorized/unauthorized.component';
import { MarketRiskVarComponent } from './pages/admin/market-risk-var/market-risk-var.component';
import { SystemVarComponent } from './pages/admin/system-var/system-var.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ReportComponent } from './pages/report/report.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './model/role';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/report' },

  //User pages
  { path: 'login', component: LoginComponent },
  { path: 'profile',
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.IT_USER_ADMIN]}
  },


  //System pages
  { path: 'system-var',
    component: SystemVarComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.IT_SYSTEM_ADMIN]}
  },
  { path: 'market-risk-var',
    component: MarketRiskVarComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.MARKET_RISK_ADMIN]}
  },

  //Report pages
  { path: 'report',
    component: ReportComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.MARKET_RISK_REPORT_VIEWER]}
  },

   //error pages
   {path: '404', component: NotFoundComponent},
   {path: '403', component: UnauthorizedComponent},
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
