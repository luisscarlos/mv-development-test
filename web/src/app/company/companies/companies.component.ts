import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../../../../src/service/company/company.service';
import { Company } from 'src/model/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'phoneNumber', 'action'];
  dataSource: Company[] = [];
  isLoadingResults: boolean = true;

  constructor(private api: CompanyService) { }

  ngOnInit(): void {
    this.api.getCompanies()
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
