import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/employee/api.service';
import { Employee } from 'src/model/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  isLoadingResults: boolean = true;
  employee: Employee = {
    id: '',
    name: '',
    address: '',
    phoneNumber: '',
    cellNumber: '',
    role: ''
  };

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.getEmployee(this.route.snapshot.params['id']);
  }

  getEmployee(id: string) {
    this.api.getEmployee(id)
      .subscribe(data => {
        this.employee = data;
        console.log(this.employee);
        this.isLoadingResults = false;
      });
  }

  deleteEmployee(id: string) {
    this.isLoadingResults = true;
    this.api.deleteEmployee(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/employees']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
