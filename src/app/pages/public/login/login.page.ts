import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  email: string = '';
  senha: string = '';

  constructor(private login: LoginService) { }

  ngOnInit() { }

  public entrar(): void {
    this.login.login(this.email, this.senha);
  }
}