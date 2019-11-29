import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TamanhoPage } from './tamanho.page';

const routes: Routes = [
  {
    path: '',
    component: TamanhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TamanhoPageRoutingModule {}
