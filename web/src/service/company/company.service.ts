import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

import { Company } from 'src/model/company';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:4200/api/companies';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {

    return this.http.get<Company[]>(apiUrl)
    .pipe(
      tap(companies => console.log('Leu as empresas')),
      catchError(this.handleError('getCompanies', []))
    );
  }

  getCompany(id: string): Observable<Company> {
    const url = `${apiUrl}/${id}`;

    return this.http.get<Company>(url)
    .pipe(
      tap(_ => console.log(`Leu a empresa ${id}`)),
      catchError(this.handleError<Company>(`getCompany id=${id}`))
    );
  }

  addCompany(company: NgForm): Observable<Company> {

    return this.http.post<Company>(apiUrl, company, httpOptions)
    .pipe(
      tap((company: Company) => console.log(`Funcionário adicionado com id=${company.id}`)),
      catchError(this.handleError<Company>('addCompany'))
    )
  }

  updateCompany(id: string, company: NgForm): Observable<Company> {
    const url = `${apiUrl}/${id}`;

    return this.http.put<Company>(url, company, httpOptions)
    .pipe(
      tap(_ => console.log(`Atualizou a empresa com o id ${id}`)),
      catchError(this.handleError<Company>(`updateCompany`))
    );
  }

  deleteCompany(id: string): Observable<Company> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Company>(url, httpOptions)
    .pipe(
      tap(_ => console.log(`Removeu a empresa com o id ${id}`)),
      catchError(this.handleError<Company>(`deleteCompany`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T);
    };
  }
}
