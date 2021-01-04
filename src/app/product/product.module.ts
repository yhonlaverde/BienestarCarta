import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { DetailProductPage } from '../detail-product/detail-product.page';
import { DetailProductPageModule } from '../detail-product/detail-product.module';

@NgModule({
  entryComponents:[
    DetailProductPage
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    DetailProductPageModule
  ],
  declarations: [ProductPage]
})
export class ProductPageModule {}
