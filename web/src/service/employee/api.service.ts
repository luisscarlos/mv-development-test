import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

import { Employee } from 'src/model/employee';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:4200/api/employees';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(apiUrl)
    .pipe(
      tap(employees => console.log('Leu os funcionários')),
      catchError(this.handleError('getEmployees', []))
    );
  }

  getEmployee(id: string): Observable<Employee> {
    const url = `${apiUrl}/${id}`;

    return this.http.get<Employee>(url)
    .pipe(
      tap(_ => console.log(`Leu o funcionário ${id}`)),
      catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
  }

  addEmployee(employee: NgForm): Observable<Employee> {

    return this.http.post<Employee>(apiUrl, employee, httpOptions)
    .pipe(
      tap((employee: Employee) => console.log(`Funcionário adicionado com id=${employee.id}`)),
      catchError(this.handleError<Employee>('addEmployee'))
    )
  }

  updateEmployee(id: string, employee: NgForm): Observable<Employee> {
    const url = `${apiUrl}/${id}`;

    return this.http.put<Employee>(url, employee, httpOptions)
    .pipe(
      tap(_ => console.log(`Atualizou o funcionário com o id ${id}`)),
      catchError(this.handleError<Employee>(`updateEmployee`))
    );
  }

  deleteEmployee(id: string): Observable<Employee> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Employee>(url, httpOptions)
    .pipe(
      tap(_ => console.log(`Removeu o funcionário com o id ${id}`)),
      catchError(this.handleError<Employee>(`deleteEmployee`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T);
    };
  }
}
