import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.page.html',
  styleUrls: ['./sistema.page.scss'],
})
export class SistemaPage implements OnInit {
  usuarioLogado;

  constructor(private login: LoginService, private menu: MenuController) {
    this.usuarioLogado = this.login.usuarioLogado;
    this.menu.enable(true);
  }

  ngOnInit() {
  }
  public sair() {
    this.login.logout();
  }
}
