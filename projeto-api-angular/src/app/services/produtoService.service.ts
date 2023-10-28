import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CadastrarComponent } from '../pages/cadastrar-produto/cadastrar-produto.component';
import { Produtos } from '../interfaces/produtos';
import { ProdutosComponent } from '../pages/produto/produto.component';

@Injectable({
  providedIn: 'root'
})

export class ConexaoApiService {
  apiUrl = 'http://localhost:8080/api/produtos'; 
 
  constructor(private httpcliente:HttpClient) { }

  public getDados() {
    return this.httpcliente.get<Produtos[]>(this.apiUrl);
  }
  public enviaDados(servico:Produtos){
    return this.httpcliente.post(this.apiUrl, ProdutosComponent);
  }

}
