import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.css']
})
export class ExcluirProdutoComponent implements OnInit {

  produto: Produto = {
    id: 0,
    name: '',
    price: 0,
    model: '',
  }

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((produto) => {
      this.produto = produto;
    })
  }

  excluirPensamento() {
    if(this.produto.id){
      this.service.excluir(this.produto.id).subscribe(() => {
        this.router.navigate(['/listarProdutos'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarProdutos'])
  }

}
