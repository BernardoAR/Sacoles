import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaborPageRoutingModule } from './sabor-routing.module';

import { SaborPage } from './sabor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaborPageRoutingModule
  ],
  declarations: [SaborPage]
})
export class SaborPageModule {}
