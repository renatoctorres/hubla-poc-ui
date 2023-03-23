import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {Seller} from "./seller";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private baseURL = "https://localhost:8080";
  private apiURL = this.baseURL + "/sellers";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(seller:Seller): Observable<any> {
    return this.httpClient.post(this.apiURL, JSON.stringify(seller), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id:number, seller:Seller): Observable<any> {
    return this.httpClient.put(this.apiURL + id, JSON.stringify(seller), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL +  id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => error);
  }
}
