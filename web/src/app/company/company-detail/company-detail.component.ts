import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/service/company/company.service';
import { Company } from 'src/model/company';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  isLoadingResults: boolean = true;
  company: Company = {
    id: '',
    name: '',
    address: '',
    phoneNumber: ''
  };

  constructor(private router: Router, private route: ActivatedRoute, private api: CompanyService) { }

  ngOnInit(): void {
    this.getCompany(this.route.snapshot.params['id']);
  }

  getCompany(id: string) {
    this.api.getCompany(id)
      .subscribe(data => {
        this.company = data;
        console.log(this.company);
        this.isLoadingResults = false;
      });
  }

  deleteCompany(id: string) {
    this.isLoadingResults = true;
    this.api.deleteCompany(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/companies']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
