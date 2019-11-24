import { Component, OnInit } from '@angular/core';
import { Tamanho } from 'src/app/models/Tamanho';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-tamanho',
  templateUrl: './tamanho.page.html',
  styleUrls: ['./tamanho.page.scss']
})
export class TamanhoPage implements OnInit {
  // Tamanhos é para a listagem, já o tipo sacolé para o seu método
  tamanhos: any;
  tamanhoSacole: Tamanho;
  constructor(private fs: FirestoreService) {
    this.tamanhoSacole = new Tamanho();
    this.tamanhos = fs.listar('tamanho');
  }
  public gravar() {
    this.fs.gravar(this.tamanhoSacole, 'tamanho');
    this.tamanhoSacole = new Tamanho();
  }
  public editar(item: Tamanho) {
    this.tamanhoSacole = item;
  }
  public apagar(uid: string) {
    this.fs.deletar(uid, 'tamanho');
  }

  ngOnInit() {}
}
