import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-recupera-senha',
  templateUrl: './recupera-senha.page.html',
  styleUrls: ['./recupera-senha.page.scss'],
})
export class RecuperaSenhaPage implements OnInit {
  email = '';
  constructor(private login: LoginService) { }

  ngOnInit() {
  }
  public recuperarSenha(): void {
    this.login.recuperarSenha(this.email);
  }
}
