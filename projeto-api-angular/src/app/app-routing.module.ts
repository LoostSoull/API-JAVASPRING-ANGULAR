import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './pages/produto/produto.component';
import { CadastrarComponent } from './pages/cadastrar-produto/cadastrar-produto.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent
},
  {path: 'produtos', component:ProdutosComponent
},
{path: 'cadastrar', component:CadastrarComponent
},
{path: 'cadastrar/editar', component:CadastrarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
