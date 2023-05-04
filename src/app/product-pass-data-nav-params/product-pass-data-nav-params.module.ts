import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPassDataNavParamsPageRoutingModule } from './product-pass-data-nav-params-routing.module';

import { ProductPassDataNavParamsPage } from './product-pass-data-nav-params.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPassDataNavParamsPageRoutingModule
  ],
  declarations: [ProductPassDataNavParamsPage]
})
export class ProductPassDataNavParamsPageModule {}
