import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent } from 'src/app/company/companies/companies.component';
import { CompanyNewComponent } from 'src/app/company/company-new/company-new.component';
import { CompanyDetailComponent } from 'src/app/company/company-detail/company-detail.component';
import { CompanyEditComponent } from 'src/app/company/company-edit/company-edit.component';

import { EmployeesComponent } from 'src/app/employee/employees/employees.component';
import { EmployeeDetailComponent } from 'src/app/employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from 'src/app/employee/employee-edit/employee-edit.component';
import { EmployeeNewComponent } from 'src/app/employee/employee-new/employee-new.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
    data: { title: 'Lista de funcionários' }
  },
  {
    path: 'employee-detail/:id',
    component: EmployeeDetailComponent,
    data: { title: 'Detalhe do funcionário' }
  },
  {
    path: 'employee-edit/:id',
    component: EmployeeEditComponent,
    data: { title: 'Editar funcionário' }
  },
  {
    path: 'employee-new',
    component: EmployeeNewComponent,
    data: { title: 'Novo funcionário'}
  },

  {
    path: 'companies',
    component: CompaniesComponent,
    data: { title: 'Lista de empresas' }
  },
  {
    path: 'company-detail/:id',
    component: CompanyDetailComponent,
    data: { title: 'Detalhe da empresa' }
  },
  {
    path: 'company-edit/:id',
    component: CompanyEditComponent,
    data: { title: 'Editar empresa' }
  },
  {
    path: 'company-new',
    component: CompanyNewComponent,
    data: { title: 'Nova empresa'}
  },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
