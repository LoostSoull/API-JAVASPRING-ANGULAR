import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IRecebeDados } from 'src/app/apiDados/recebe-dados';
import { ConexaoApiService } from 'src/app/services/conexao-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  constructor(private conexaoapi:ConexaoApiService){}

  dadosRecebidos: IRecebeDados[] = [];
 
  Oninit(){
    console.log(this.exibeDados());
  }

  exibeDados(){
    this.conexaoapi.getDados().subscribe(data => {
       this.dadosRecebidos = data;
       console.log(this.dadosRecebidos);
    });
  }
 
}
