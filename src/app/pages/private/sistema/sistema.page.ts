import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MenuController } from '@ionic/angular';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.page.html',
  styleUrls: ['./sistema.page.scss']
})
export class SistemaPage implements OnInit {
  usuarioLogado;
  resposta: any;
  icone: string;
  constructor(
    private login: LoginService,
    private menu: MenuController,
    private temp: WeatherService
  ) {
    this.temp.temperatura('São Borja').subscribe(resp => {
      this.resposta = resp;
      const codigo = resp.weather[0].icon;
      this.icone = `http://openweathermap.org/img/wn/${codigo}@2x.png`;
    });
    console.log();
    this.usuarioLogado = this.login.usuarioLogado;
    this.menu.enable(true);
  }

  ngOnInit() {}
  public sair() {
    this.login.logout();
  }
}
