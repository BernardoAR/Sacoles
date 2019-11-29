import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaborPage } from './sabor.page';

const routes: Routes = [
  {
    path: '',
    component: SaborPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaborPageRoutingModule {}
