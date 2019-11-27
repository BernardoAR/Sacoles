import { Component, OnInit } from '@angular/core';
import { Venda } from 'src/app/models/Venda';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.page.html',
  styleUrls: ['./venda.page.scss']
})
export class VendaPage implements OnInit {
  sacoles: any;
  vendas: any;
  vendaSacole: Venda;
  sacole: any;
  quantidade: number;
  uid: string;
  compareFn = this._compareFn.bind(this);
  // Método para fazer as comparações
  _compareFn(a, b) {
    // Checa os uid
    return a.uid === b.uid;
  }
  constructor(private fs: FirestoreService) {
    this.vendaSacole = new Venda();
    this.quantidade = 0;
    this.sacoles = fs.listar('sacole');
    this.vendas = fs.listarCond('venda', 'pago', '==', false);
  }
  public gravar() {
    // Grava os valores corretamente
    this.vendaSacole.sacoles = {
      quantidade: this.quantidade,
      valor: this.quantidade * this.sacole.tipo.valor,
      sabor: this.sacole.sabor.nome
    };
    // Atualiza os valores do Sacolé
    this.sacole.quantidade -= this.quantidade;
    // Grava o valor
    this.fs.gravar(this.sacole, 'sacole');
    this.fs.gravar(this.vendaSacole, 'venda');
    this.vendaSacole = new Venda();
    this.quantidade = 0;
  }
  public editar(item: Venda) {
    this.vendaSacole = item;
    this.quantidade = this.vendaSacole.sacoles.quantidade;
    this.uid = this.vendaSacole.sacoles.sabor;
  }
  public apagar(uid: string) {
    this.fs.deletar(uid, 'venda');
  }

  ngOnInit() {}
}
