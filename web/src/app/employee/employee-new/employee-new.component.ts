import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ApiService } from 'src/service/employee/api.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {

  employeeForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({});
   }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'address': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
      'cellNumber': [null, Validators.required],
      'role': [null, Validators.required],
    });
  }

  addEmployee(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addEmployee(form)
      .subscribe(res => {
        const id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/employee-detail', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
