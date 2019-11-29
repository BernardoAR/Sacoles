import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SacolesPage } from './sacoles.page';

const routes: Routes = [
  {
    path: '',
    component: SacolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SacolesPageRoutingModule {}
