import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertService } from '../alert/alert.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private af: AngularFireAuth, private al: AlertService, private route: Router) {}

  get usuarioLogado() {
    return this.af.auth.currentUser;
  }
  /**
   * Método utilizado para recuperar a senha
   * @param email email que irá enviar a verificação
   */
  public async recuperarSenha(email: string) {
    const loading = await this.al.loading();
    this.af.auth.sendPasswordResetEmail(email).then(
      usuario => {
        loading.dismiss();
        this.al.alert('Email de recuperar a senha enviado', {
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.route.navigate(['login']);
              }
            }
          ]
        });
      },
      error => {
        loading.dismiss();
        if (error.code === 'auth/invalid-email') {
          this.al.toast({ message: 'Tipo de e-mail inexistente!' });
        } else if (error.code === 'auth/user-not-found') {
          this.al.toast({ message: 'Não possui usuário com esse e-mail' });
        }
      }
    );
  }
  /**
   * Método utilizado para fazer o login
   * @param email email do usuário
   * @param senha senha do usuário
   */
  public async login(email: string, senha: string) {
    const loading = await this.al.loading();
    this.af.auth.signInWithEmailAndPassword(email, senha).then(
      user => {
        loading.dismiss();
        if (user.user.emailVerified) {
          this.route.navigate(['sistema']);
        } else {
          this.al.toast({ message: 'Acesso negado verifique seu email' });
          this.logout();
        }
      },
      error => {
        loading.dismiss();
        this.al.toast({ message: 'Usuário ou senha inválidos' });
      }
    );
  }

  public logout() {
    this.af.auth.signOut();
    this.route.navigate(['login']);
  }

  public async criarNovoUsuario(u: Usuario) {
    const loading = await this.al.loading();
    this.af.auth.createUserWithEmailAndPassword(u.email, u.senha).then(
      credencias => {
        credencias.user
          .updateProfile({
            displayName: u.nome
          })
          .then(() => {
            // envia um email de confirmacao
            this.af.auth.currentUser.sendEmailVerification({
              url: 'http://localhost:8100'
            });
            loading.dismiss();
            this.al.alert('Cadastro efetivado com sucesso! Verifique seu email', {
              buttons: [
                {
                  text: 'continuar',
                  handler: () => {
                    this.route.navigate(['login']);
                  }
                }
              ]
            });
          });
      },
      erro => {
        loading.dismiss();
        if (erro.code === 'auth/invalid-email') {
          this.al.alert('Email inválido');
        }
        console.log(erro);
      }
    );
  }

  public isLogado(): Observable<boolean> {
    return this.af.authState.pipe(
      map(usuario => {
        // se usuario diferente de nulo
        // existe sessão ativa, ou usuario logado
        return usuario !== null;
      })
    );
  }
}
