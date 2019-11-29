import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SessionGuard } from './guards/session.guard';

const routes: Routes = [
  { path: '', redirectTo: 'sistema', pathMatch: 'full' },
  {
    path: 'sabor',
    loadChildren: () => import('./pages/private/sabor/sabor.module').then(m => m.SaborPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'sacoles',
    loadChildren: () =>
      import('./pages/private/sacoles/sacoles.module').then(m => m.SacolesPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'sistema',
    loadChildren: () =>
      import('./pages/private/sistema/sistema.module').then(m => m.SistemaPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'tipo',
    loadChildren: () => import('./pages/private/tipo/tipo.module').then(m => m.TipoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'tamanho',
    loadChildren: () =>
      import('./pages/private/tamanho/tamanho.module').then(m => m.TamanhoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'venda',
    loadChildren: () => import('./pages/private/venda/venda.module').then(m => m.VendaPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./pages/public/cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/public/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'recupera-senha',
    loadChildren: () =>
      import('./pages/public/recupera-senha/recupera-senha.module').then(
        m => m.RecuperaSenhaPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
