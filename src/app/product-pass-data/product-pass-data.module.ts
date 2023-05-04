import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPassDataPageRoutingModule } from './product-pass-data-routing.module';

import { ProductPassDataPage } from './product-pass-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPassDataPageRoutingModule
  ],
  declarations: [ProductPassDataPage]
})
export class ProductPassDataPageModule {}
