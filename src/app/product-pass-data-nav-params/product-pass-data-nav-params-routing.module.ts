import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPassDataNavParamsPage } from './product-pass-data-nav-params.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPassDataNavParamsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPassDataNavParamsPageRoutingModule {}
