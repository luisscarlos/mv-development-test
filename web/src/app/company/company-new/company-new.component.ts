import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { CompanyService } from 'src/service/company/company.service';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.scss']
})
export class CompanyNewComponent implements OnInit {

  companyForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: CompanyService, private formBuilder: FormBuilder) {
    this.companyForm = this.formBuilder.group({});
   }

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'address': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
    });
  }

  addCompany(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addCompany(form)
      .subscribe(res => {
        const id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/company-detail', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
