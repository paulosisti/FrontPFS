import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = 'http://localhost:3000/produtos'
  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API)
  }

  criar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.API, produto)
  }

  editar(produto: Produto): Observable<Produto> {
    const url = `${this.API}/${produto.id}`
    return this.http.put<Produto>(url, produto)
  }

  excluir(id: number): Observable<Produto> {
    const url = `${this.API}/${id}`
    return this.http.delete<Produto>(url)
  }

  buscarPorId(id: number): Observable<Produto> {
    const url = `${this.API}/${id}`
    return this.http.get<Produto>(url)
  }

}
