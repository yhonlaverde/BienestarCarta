import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminEventoPageRoutingModule } from './admin-evento-routing.module';

import { AdminEventoPage } from './admin-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminEventoPageRoutingModule
  ],
  declarations: [AdminEventoPage]
})
export class AdminEventoPageModule {}
