import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SessionGuard } from './services/session.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'sacoles', loadChildren: './pages/private/sacoles/sacoles.module#SacolesPageModule', canActivate: [SessionGuard] },
  { path: 'tipo', loadChildren: './pages/private/tipo/tipo.module#TipoPageModule', canActivate: [SessionGuard] },
  { path: 'venda', loadChildren: './pages/private/venda/venda.module#VendaPageModule', canActivate: [SessionGuard] },
  { path: 'sabor', loadChildren: './pages/private/sabor/sabor.module#SaborPageModule', canActivate: [SessionGuard] },
  { path: 'login', loadChildren: './pages/public/login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './pages/public/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'recupera-senha', loadChildren: './pages/public/recupera-senha/recupera-senha.module#RecuperaSenhaPageModule' },
  { path: 'sistema', loadChildren: './pages/private/sistema/sistema.module#SistemaPageModule', canActivate: [SessionGuard] },
  { path: 'tamanho', loadChildren: './pages/private/tamanho/tamanho.module#TamanhoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
