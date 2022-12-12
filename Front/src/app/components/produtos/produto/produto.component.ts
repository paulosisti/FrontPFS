import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input() produto: Produto = {
    id: 0,
    name: 'Mesa',
    price: 1200,
    model: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraProduto(): string {
    if(this.produto.name.length >= 25){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
