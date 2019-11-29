import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TamanhoPageRoutingModule } from './tamanho-routing.module';

import { TamanhoPage } from './tamanho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TamanhoPageRoutingModule
  ],
  declarations: [TamanhoPage]
})
export class TamanhoPageModule {}
