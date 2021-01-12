import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosInternosPage } from './eventos-internos.page';

const routes: Routes = [
  {
    path: '',
    component: EventosInternosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosInternosPageRoutingModule {}
