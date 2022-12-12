import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((produto) =>{
      this.formulario = this.formBuilder.group({
        id: [produto.id],
        name: [produto.name, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        price: [produto.price, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        model: [produto.model]
      })
    })
  }

  editarProduto() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarProdutos']);
    })
  }

  cancelar() {
    this.router.navigate(['/listarProdutos']);
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return "botao"
    }
    else return "botao__desabilitado"
  }

}
