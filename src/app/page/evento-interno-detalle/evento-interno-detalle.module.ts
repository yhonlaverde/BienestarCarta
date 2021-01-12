import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoInternoDetallePageRoutingModule } from './evento-interno-detalle-routing.module';

import { EventoInternoDetallePage } from './evento-interno-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoInternoDetallePageRoutingModule
  ],
  declarations: [EventoInternoDetallePage]
})
export class EventoInternoDetallePageModule {}
