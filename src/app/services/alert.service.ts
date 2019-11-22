import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { LoadingOptions, ToastOptions, AlertOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Classe para os serviços de alerta, para as mensagens necessárias e tudo mais
 */
export class AlertService {

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }
  /**
   * Método utilizado para dar o alerta
   * @param msg mensagem a ser utilizada
   * @param options opções adicionais
   */
  async alert(msg: string, options?: AlertOptions): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create({
      message: msg,
      buttons: [
        {
          text: 'ok'
        }
      ],
      ...options
    });
    await alert.present();
    return alert;
  }
  /**
   * Método utilizado para o carregamento dinâmico até finalizar
   * @param options
   */
  async loading(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
      ...options
    });
    await loading.present();
    loading.dismiss();
    return loading;
  }
  /**
   * Método para toast
   * @param options opções opcionais
   */
  async toast(options?: ToastOptions): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      position: 'bottom',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Ok',
      ...options
    });
    await toast.present();
    return toast;
  }
}
