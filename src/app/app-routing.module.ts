import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'user-detail',
    loadChildren: () => import('./user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'product-pass-data',
    loadChildren: () => import('./product-pass-data/product-pass-data.module').then( m => m.ProductPassDataPageModule)
  },
  {
    path: 'product-pass-data-nav-params',
    loadChildren: () => import('./product-pass-data-nav-params/product-pass-data-nav-params.module').then( m => m.ProductPassDataNavParamsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
