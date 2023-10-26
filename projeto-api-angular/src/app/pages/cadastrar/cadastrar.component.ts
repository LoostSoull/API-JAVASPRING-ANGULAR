import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {

  teste(){
    Swal.fire('Cadastro Realizado com sucesso!')
  }
}
