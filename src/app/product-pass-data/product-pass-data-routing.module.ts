import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPassDataPage } from './product-pass-data.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPassDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPassDataPageRoutingModule {}
