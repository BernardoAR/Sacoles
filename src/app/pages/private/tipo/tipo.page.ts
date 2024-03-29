import { Component, OnInit } from '@angular/core';
import { Tipo } from 'src/app/models/Tipo';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.page.html',
  styleUrls: ['./tipo.page.scss']
})
export class TipoPage implements OnInit {
  // Tipos é para a listagem, já o tipo sacolé para o seu método
  tipos: any;
  tamanhos: any;
  tipoSacole: Tipo;
  compareFn = this._compareFn.bind(this);
  // Método para fazer as comparações
  _compareFn(a, b) {
    // Checa os uid
    return a.uid === b.uid;
  }
  constructor(private fs: FirestoreService) {
    this.tipoSacole = new Tipo();
    this.tipos = fs.listar('tipo');
    this.tamanhos = fs.listar('tamanho');
  }
  public gravar() {
    this.fs.gravar(this.tipoSacole, 'tipo');
    this.tipoSacole = new Tipo();
  }
  public editar(item: Tipo) {
    this.tipoSacole = item;
  }
  public apagar(uid: string) {
    this.fs.deletar(uid, 'tipo');
  }
  ngOnInit() {}
}
