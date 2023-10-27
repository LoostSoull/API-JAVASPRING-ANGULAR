import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRecebeDados } from '../apiDados/recebe-dados';

@Injectable({
  providedIn: 'root'
})

export class ConexaoApiService {
  apiUrl = 'http://localhost:8080/api'; 
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/jason'
    })
  };
  
  constructor(private httpcliente:HttpClient) { }

  public getDados() {
    return this.httpcliente.get<IRecebeDados[]>(this.apiUrl);
  }

}
