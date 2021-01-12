import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosInternosPageRoutingModule } from './eventos-internos-routing.module';

import { EventosInternosPage } from './eventos-internos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosInternosPageRoutingModule
  ],
  declarations: [EventosInternosPage]
})
export class EventosInternosPageModule {}
