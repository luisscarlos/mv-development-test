import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/employee/api.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  employeeForm: FormGroup;
  isLoadingResults = false;

  id: string = '';
  name: string = '';
  address: string = '';
  phoneNumber: string = '';
  cellNumber: string = '';
  role: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
    this.employeeForm = formBuilder.group({});
  }

  ngOnInit(): void {
    this.getEmployee(this.route.snapshot.params['id']);
    this.employeeForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'address': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
      'cellNumber': [null, Validators.required],
      'role': [null, Validators.required]
    });
  }

  getEmployee(id: string) {
    this.api.getEmployee(id).subscribe(data => {
      this.id = data.id;
      this.employeeForm.setValue({
        name: data.name,
        address: data.address,
        phoneNumber: data.phoneNumber,
        cellNumber: data.cellNumber,
        role: data.role
      });
    });
  }

  updateEmployee(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateEmployee(this.id, form)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate([`/employee-detail/${this.id}`]);
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      })
  }

}
