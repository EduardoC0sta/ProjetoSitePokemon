import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe para usar o ngModel
import { RouterLink } from '@angular/router'; // Importe para usar o routerLink

// Interface para tipar nossos dados
interface Produto {
  id: number;
  nome: string;
  regiao: string;
  preco: number;
  precoAntigo?: number;
  imagem: string;
  link: string;
}

@Component({
  selector: 'app-pelucia',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './pelucia.html',
  styleUrls: ['./pelucia.css']
})
export class Pelucia implements OnInit {

  // 1. DADOS: Lista completa de todas as pelúcias
  todosOsProdutos: Produto[] = [
    { id: 1, nome: 'Pelúcia Wooper', regiao: 'johto', preco: 200.00, precoAntigo: 250.00, imagem: 'img/wopper-plush.jpg', link: '/produto' },
    { id: 2, nome: 'Pelúcia Pikachu Clássico', regiao: 'kanto', preco: 270.00, imagem: 'img/pikachu-plush.jpg', link: '/produto' },
    { id: 3, nome: 'Pelúcia Mimikyu', regiao: 'alola', preco: 260.00, imagem: 'img/mimikyu-plush.jpg', link: '/produto' },
    { id: 4, nome: 'Pelúcia Flutter Mane', regiao: 'paldea', preco: 300.00, imagem: 'img/fluttermane-plush.jpg', link: '/produto' },
    { id: 5, nome: 'Pelúcia Pikachu Kimono', regiao: 'kanto', preco: 290.00, imagem: 'img/pikachu-plush-kimono.jpg', link: '/produto' }
  ];

  // 2. ESTADO: Variáveis que controlam a exibição
  produtosExibidos: Produto[] = [];
  opcoesDeFiltro = [
    { nome: 'Kanto', valor: 'kanto', selecionado: false },
    { nome: 'Johto', valor: 'johto', selecionado: false },
    { nome: 'Hoenn', valor: 'hoenn', selecionado: false },
    { nome: 'Sinnoh', valor: 'sinnoh', selecionado: false },
    { nome: 'Unova', valor: 'unova', selecionado: false },
    { nome: 'Kalos', valor: 'kalos', selecionado: false },
    { nome: 'Alola', valor: 'alola', selecionado: false },
    { nome: 'Galar', valor: 'galar', selecionado: false },
    { nome: 'Paldea', valor: 'paldea', selecionado: false }
  ];
  ordenacaoAtual: string = 'relevancia';

  constructor() { }

  ngOnInit(): void {
    this.aplicarFiltrosEOrdenacao();
  }

  // 3. LÓGICA: A mesma função de antes, agora para as pelúcias
  aplicarFiltrosEOrdenacao(): void {
    let produtosFiltrados: Produto[];

    const regioesSelecionadas = this.opcoesDeFiltro
      .filter(opcao => opcao.selecionado)
      .map(opcao => opcao.valor);

    if (regioesSelecionadas.length === 0) {
      produtosFiltrados = [...this.todosOsProdutos];
    } else {
      produtosFiltrados = this.todosOsProdutos.filter(produto =>
        regioesSelecionadas.includes(produto.regiao)
      );
    }

    switch (this.ordenacaoAtual) {
      case 'price-asc':
        produtosFiltrados.sort((a, b) => a.preco - b.preco);
        break;
      case 'price-desc':
        produtosFiltrados.sort((a, b) => b.preco - a.preco);
        break;
    }

    this.produtosExibidos = produtosFiltrados;
  }

  removerFiltro(filtro: any): void {
    filtro.selecionado = false;
    this.aplicarFiltrosEOrdenacao();
  }
}
