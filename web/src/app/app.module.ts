import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from 'src/app/employee/employees/employees.component';
import { EmployeeDetailComponent } from 'src/app/employee/employee-detail/employee-detail.component';
import { EmployeeNewComponent } from 'src/app/employee/employee-new/employee-new.component';
import { EmployeeEditComponent } from 'src/app/employee/employee-edit/employee-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { CompaniesComponent } from 'src/app/company/companies/companies.component';
import { CompanyNewComponent } from './company/company-new/company-new.component';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    EmployeeNewComponent,
    EmployeeEditComponent,
    MenuComponent,
    CompaniesComponent,
    CompanyNewComponent,
    CompanyDetailComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    LayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
