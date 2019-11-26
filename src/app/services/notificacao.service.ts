import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import {
  LocalNotifications,
  ELocalNotificationTriggerUnit
} from '@ionic-native/local-notifications/ngx';
import { AlertService } from './alert.service';
@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {
  constructor(private plt: Platform, private ln: LocalNotifications, private al: AlertService) {
    // Antes de chamar precisa ter certeza que a plataforma está preparada
    this.plt.ready().then(() => {
      this.ln.on('trigger').subscribe(res => {
        const msg = res.data ? res.data.mydata : '';
        this.al.alert(msg, { header: res.title, subHeader: res.text });
      });
    });
  }
  scheduleNotification() {
    this.ln.schedule({
      id: 1,
      title: 'Atenção',
      text: 'Aviso Diário',
      data: { mydata: 'Aviso Genérico' },
      trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND }
    });
  }
  notificacaoDiaria() {
    this.ln.schedule({
      id: 2,
      title: 'Atenção',
      text: 'Aviso Diário',
      data: { mydata: 'Aviso Genérico' },
      trigger: { every: ELocalNotificationTriggerUnit.DAY }
    });
  }
}
