import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    // path: '',
    // loadChildren: './home/home.module#HomeModule'

    //  See https://stackoverflow.com/questions/41396839/exception-uncaught-in-promise-error-cannot-find-module-app-home-home-modul
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products/:productId',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  }
];
