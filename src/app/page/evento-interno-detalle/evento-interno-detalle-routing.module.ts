import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoInternoDetallePage } from './evento-interno-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: EventoInternoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventoInternoDetallePageRoutingModule {}
