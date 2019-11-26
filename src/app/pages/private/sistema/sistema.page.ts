import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MenuController } from '@ionic/angular';
import { WeatherService } from 'src/app/services/weather.service';
import { FirestoreService } from 'src/app/services/firestore.service';

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
    private temp: WeatherService,
    private fs: FirestoreService
  ) {
    this.temp.temperatura('São Borja').subscribe(resp => {
      this.resposta = resp;
      const codigo = resp.weather[0].icon;
      this.icone = `http://openweathermap.org/img/wn/${codigo}@2x.png`;
    });
    this.sacoles = fs.listarOrd('sacole', 'quantidade', 'asc');
    this.usuarioLogado = this.login.usuarioLogado;
    this.menu.enable(true);
  }

  ngOnInit() {}
  public sair() {
    this.login.logout();
  }
}
