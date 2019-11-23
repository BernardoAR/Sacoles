import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'sacoles', loadChildren: './pages/private/sacoles/sacoles.module#SacolesPageModule' },
  { path: 'tipo', loadChildren: './pages/private/tipo/tipo.module#TipoPageModule' },
  { path: 'venda', loadChildren: './pages/private/venda/venda.module#VendaPageModule' },
  { path: 'sabor', loadChildren: './pages/private/sabor/sabor.module#SaborPageModule' },
  { path: 'login', loadChildren: './pages/public/login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './pages/public/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'recupera-senha', loadChildren: './pages/public/recupera-senha/recupera-senha.module#RecuperaSenhaPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
