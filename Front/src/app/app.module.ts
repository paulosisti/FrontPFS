import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CriarProdutoComponent } from './components/produtos/criar-produto/criar-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { ProdutoComponent } from './components/produtos/produto/produto.component';
import { ExcluirProdutoComponent } from './components/produtos/excluir-produto/excluir-produto.component';
import { EditarProdutoComponent } from './components/produtos/editar-produto/editar-produto.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CriarProdutoComponent,
    ListarProdutosComponent,
    ProdutoComponent,
    ExcluirProdutoComponent,
    EditarProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
