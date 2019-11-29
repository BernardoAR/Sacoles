import { Component, OnInit } from '@angular/core';
import { Sacole } from 'src/app/models/Sacole';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-sacoles',
  templateUrl: './sacoles.page.html',
  styleUrls: ['./sacoles.page.scss']
})
export class SacolesPage implements OnInit {
  tipos: any;
  sabores: any;
  sacoles: any;
  sacole: Sacole;
  compareFn = this._compareFn.bind(this);
  // Método para fazer as comparações
  _compareFn(a, b) {
    // Checa os uid
    return a.uid === b.uid;
  }
  constructor(private fs: FirestoreService) {
    this.sacole = new Sacole();
    this.sacoles = fs.listar('sacole');
    this.tipos = fs.listar('tipo');
    this.sabores = fs.listar('sabor');
  }
  public gravar() {
    this.fs.gravar(this.sacole, 'sacole');
    this.sacole = new Sacole();
  }
  public editar(item: Sacole) {
    this.sacole = item;
  }
  public apagar(uid: string) {
    this.fs.deletar(uid, 'sacole');
  }

  ngOnInit() {}
}
