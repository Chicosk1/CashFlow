import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/categorias`);
  }

  getTransacoes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/transacoes`);
  }

  salvarTransacao(transacao: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/transacoes`, transacao);
  }
}