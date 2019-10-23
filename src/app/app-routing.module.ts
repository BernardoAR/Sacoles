import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/public/home/home.module#HomePageModule' },
  { path: 'sacoles', loadChildren: './pages/private/sacoles/sacoles.module#SacolesPageModule' },
  { path: 'tipo', loadChildren: './pages/private/tipo/tipo.module#TipoPageModule' },
  { path: 'venda', loadChildren: './pages/private/venda/venda.module#VendaPageModule' },
  { path: 'sabor', loadChildren: './pages/private/sabor/sabor.module#SaborPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
