import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
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
