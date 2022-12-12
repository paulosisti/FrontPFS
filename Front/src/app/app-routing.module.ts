import { ExcluirProdutoComponent } from './components/produtos/excluir-produto/excluir-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarProdutoComponent } from './components/produtos/criar-produto/criar-produto.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { EditarProdutoComponent } from './components/produtos/editar-produto/editar-produto.component';

const routes: Routes = [
  {
    path: 'criarProduto',
    component: CriarProdutoComponent
  },
  {
    path: 'listarProdutos',
    component: ListarProdutosComponent
  },
  {
    path: '',
    redirectTo: 'listarProdutos',
    pathMatch: 'full',
  },
  {
    path: 'produtos/excluirProduto/:id',
    component: ExcluirProdutoComponent
  },
  {
    path: 'produtos/editarProduto/:id',
    component: EditarProdutoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
