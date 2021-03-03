import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/service/employee/api.service';
import { Employee } from 'src/model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'phoneNumber', 'cellNumber', 'role', 'action'];
  dataSource: Employee[] = [];
  isLoadingResults: boolean = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getEmployees()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
