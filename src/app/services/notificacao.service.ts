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
      this.ln.on('click').subscribe(res => {
        console.log('click:', res);
        const msg = res.data ? res.data.mydata : '';
        this.al.alert(msg, { header: res.title, subHeader: res.text });
      });
      this.ln.on('trigger').subscribe(res => {
        console.log('trigger:', res);
        const msg = res.data ? res.data.mydata : '';
        this.al.alert(msg, { header: res.title, subHeader: res.text });
      });
    });
  }
  scheduleNotification() {
    this.ln.schedule({
      id: 1,
      title: 'Atenção',
      text: 'Simons Notification',
      data: { mydata: 'My hidden message this is' },
      trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND }
    });
  }
  notificacaoDiaria() {
    this.ln.schedule({
      id: 2,
      title: 'Atenção',
      text: 'Épico',
      data: { mydata: 'My hidden message this is' },
      trigger: { every: ELocalNotificationTriggerUnit.DAY }
    });
  }
}
