import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CompanyService } from 'src/service/company/company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  companyForm: FormGroup;
  isLoadingResults = false;

  id: string = '';
  name: string = '';
  address: string = '';
  phoneNumber: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: CompanyService, private formBuilder: FormBuilder) {
    this.companyForm = formBuilder.group({});
  }

  ngOnInit(): void {
    this.getCompany(this.route.snapshot.params['id']);
    this.companyForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'address': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
    });
  }

  getCompany(id: string) {
    this.api.getCompany(id).subscribe(data => {
      this.id = data.id;
      this.companyForm.setValue({
        name: data.name,
        address: data.address,
        phoneNumber: data.phoneNumber,
      });
    });
  }

  updateCompany(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateCompany(this.id, form)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate([`/company-detail/${this.id}`]);
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      })
  }

}
