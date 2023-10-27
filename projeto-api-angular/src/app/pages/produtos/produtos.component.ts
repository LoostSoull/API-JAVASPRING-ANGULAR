import { Component } from '@angular/core';
import { IProdutos } from 'src/app/interfaces/produtos';
import { ConexaoApiService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  constructor(private conexaoapi:ConexaoApiService){}
  
  dadosRecebidos: IProdutos[] = [] ;
 
  ngOnInit(){
    this.exibeDados();
    }

  exibeDados(){
    this.conexaoapi.getDados().subscribe(data => {
       this.dadosRecebidos = data;
       console.log(this.dadosRecebidos);
    });
  }
 
}
