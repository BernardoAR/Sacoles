import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.page.html',
  styleUrls: ['./sistema.page.scss']
})
export class SistemaPage implements OnInit {
  usuarioLogado;
  resposta: any;
  icone: string;
  sacoles: any;
  constructor(
    private login: LoginService,
    private menu: MenuController,
    private fs: FirestoreService
  ) {
    this.sacoles = this.fs.listarOrd('sacole', 'quantidade', 'asc');
    this.usuarioLogado = this.login.usuarioLogado;
    this.menu.enable(true);
  }
  public sair() {
    this.login.logout();
  }
  ngOnInit() {}
}
