import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminEventoPage } from './admin-evento.page';

const routes: Routes = [
  {
    path: '',
    component: AdminEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminEventoPageRoutingModule {}
