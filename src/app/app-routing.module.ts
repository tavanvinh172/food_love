import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { ProductsComponent } from './components/products/products.component';
import { authGuard } from './common/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/dashboards/dashboards-routing.module').then(m => m.DashboardsRoutingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/auth/login/login-routing.module').then(m => m.LoginRoutingModule)
  },
  {
    path: '',
    // canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./components/dashboards/dashboards-routing.module').then(m => m.DashboardsRoutingModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./components/products/products-routing.module').then(m => m.ProductsRoutingModule)
      },
      {
        path: 'sales',
        loadChildren: () => import('./components/sales/sales-routing.module').then(m => m.SalesRoutingModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('./components/menu/menu-routing.module').then(m => m.MenuRoutingModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('./components/payment/payment-routing.module').then(m => m.PaymentRoutingModule)
      },
      {
        path: 'banner',
        loadChildren: () => import('./components/banner/banner-routing.module').then(m => m.BannerRoutingModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
