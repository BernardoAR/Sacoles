import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Sabor } from 'src/app/models/Sabor';

@Component({
  selector: 'app-sabor',
  templateUrl: './sabor.page.html',
  styleUrls: ['./sabor.page.scss']
})
export class SaborPage implements OnInit {
  // Sabores é para a listagem, já o tipo sacolé para o seu método
  sabores: any;
  saborSacole: Sabor;
  constructor(private fs: FirestoreService) {
    this.saborSacole = new Sabor();
    this.sabores = fs.listar('sabor');
  }
  public gravar() {
    this.fs.gravar(this.saborSacole, 'sabor');
    this.saborSacole = new Sabor();
  }
  public editar(item: Sabor) {
    this.saborSacole = item;
  }
  public apagar(uid: string) {
    this.fs.deletar(uid, 'sabor');
  }

  ngOnInit() {}
}
