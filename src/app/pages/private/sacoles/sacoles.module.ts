import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SacolesPageRoutingModule } from './sacoles-routing.module';

import { SacolesPage } from './sacoles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SacolesPageRoutingModule
  ],
  declarations: [SacolesPage]
})
export class SacolesPageModule {}
