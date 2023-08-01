import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cartPage/cart/cart.component';
import { ProductsModuleComponent } from './pages/product-module/products-module.component';

const routes: Routes = [
  // {path:'', component: HomePageComponent},
  { path:'', component: ProductsModuleComponent },
  { path: 'cartPage', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
