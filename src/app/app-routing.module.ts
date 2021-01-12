import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    // path: 'folder/:id',
    // loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
    path:  'folder/:id', loadChildren:  './folder/folder.module#FolderPageModule',
    canLoad: [AuthGuard]
    
  },
  {
    path:  'login', loadChildren:  './auth/login/login.module#LoginPageModule',
    canLoad: [IntroGuard, AutoLoginGuard]
  },
  {
    path:  'product/:id', loadChildren:  './product/product.module#ProductPageModule'
  },
  {
    path: 'carrito',
    loadChildren: () => import('./page/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    // // path: 'evento',
    // loadChildren: () => import('./page/admin-evento/admin-evento.module').then( m => m.AdminEventoPageModule)
    path:  'evento', loadChildren:  './page/admin-evento/admin-evento.module#AdminEventoPageModule'

  },
  {
    // path: 'eventos-internos',
    // loadChildren: () => import('./page/eventos-internos/eventos-internos.module').then( m => m.EventosInternosPageModule)
    path:  'eventos-internos', loadChildren:  './page/eventos-internos/eventos-internos.module#EventosInternosPageModule'

  },
  // {
  //   path:  'evento-interno-detalle', loadChildren:  './page/evento-interno-detalle/evento-interno-detalle.module#EventoInternoDetallePageModule'
  // },
  // {
  //   path: 'detail-product',
  //   loadChildren: () => import('./detail-product/detail-product.module').then( m => m.DetailProductPageModule)
  // },
  // {
  //   path: 'product',
  //   loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
