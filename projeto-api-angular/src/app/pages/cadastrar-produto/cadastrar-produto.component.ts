import { Component } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';

import { ConexaoApiService } from 'src/app/services/produtoService.service';




@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarComponent {
  
 

  produtosForm = new FormGroup({
   
    id: new FormControl(0),
    codigoBarras: new FormControl(''),
    nome: new FormControl(''),
    preco: new FormControl(0)
  })

  

  enviaDados(){
      
      console.log(this.produtosForm.value);

   }
  
  }

    

