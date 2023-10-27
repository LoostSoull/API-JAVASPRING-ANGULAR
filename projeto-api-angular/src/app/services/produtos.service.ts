import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProdutos } from '../interfaces/produtos';

@Injectable({
  providedIn: 'root'
})

export class ConexaoApiService {
  apiUrl = 'http://localhost:8080/api/produtos'; 
 
  constructor(private httpcliente:HttpClient) { }

  public getDados() {
    return this.httpcliente.get<IProdutos[]>(this.apiUrl);
  }

}
