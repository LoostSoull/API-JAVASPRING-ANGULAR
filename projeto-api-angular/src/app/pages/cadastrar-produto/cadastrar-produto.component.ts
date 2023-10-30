import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { Produtos } from 'src/app/interfaces/produtos';
import { ConexaoApiService } from 'src/app/services/produtoService.service';
import { ProdutosComponent } from '../produto/produto.component';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})


export class CadastrarComponent implements OnInit {

  constructor(private conexaoApi:ConexaoApiService){}
  
  produtosForm = new FormGroup({
   
    id: new FormControl(0),
    codigoBarras: new FormControl(''),
    nome: new FormControl(''),
    preco: new FormControl(0)
  })

  
  
  ngOnInit(): void {
    
  }
  

  enviar(){
    const produto: Partial <Produtos> = this.produtosForm.value as Produtos;
      this.conexaoApi.enviaDados(produto).subscribe(data =>{console.log('deu certo')});
      this.produtosForm.reset();
   }
  
   
  }

    

