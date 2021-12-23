import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:5000/transactions';

  constructor(private http: HttpClient) { }

  gettransaction(_id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${_id}`);
  }

  createtransaction(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updatetransaction(_id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${_id}`, value);
  }

  deletetransaction(_id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${_id}`, { responseType: 'text' });
  }

  gettransactionList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}