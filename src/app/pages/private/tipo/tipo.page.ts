import { Component, OnInit } from '@angular/core';
import { Tipo } from 'src/app/models/Tipo';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.page.html',
  styleUrls: ['./tipo.page.scss']
})
export class TipoPage implements OnInit {
  // Tipos é para a listagem, já o tipo sacolé para o seu método
  tipos: any;
  tipoSacole: Tipo;
  constructor(private fs: FirestoreService) {
    fs.caminho = 'tipo';
    this.tipoSacole = new Tipo();
    this.tipos = fs.listar();
  }
  public gravar() {
    this.fs.gravar(this.tipoSacole);
  }
  ngOnInit() {}
}
