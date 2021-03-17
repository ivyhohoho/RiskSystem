import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';

// Ant Design
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

import { ReportComponent } from './pages/report/report.component';
import { LoginComponent } from './pages/user/login/login.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { SystemVarComponent } from './pages/admin/system-var/system-var.component';
import { MarketRiskVarComponent } from './pages/admin/market-risk-var/market-risk-var.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { UnauthorizedComponent } from './pages/error/unauthorized/unauthorized.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    LoginComponent,
    UserListComponent,
    SystemVarComponent,
    MarketRiskVarComponent,
    NotFoundComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzListModule,
    NzGridModule,
    NzCardModule,
    NzInputModule,
    NzSkeletonModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzAlertModule,
    NzTableModule,
    NzResultModule,
    NzDividerModule,
    NzDrawerModule,
    NzSelectModule,
    NzPopconfirmModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
