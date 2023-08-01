import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path:'updateProduct/:id', component: AddProductComponent},
    {path:'addProduct', component: AddProductComponent},
    {path:'deleteProduct/:id', component: DeleteProductComponent},
    {path:'viewAllProduct', component: HomePageComponent},
    {path:'viewProduct/:id', component: ViewProductComponent},
    {path:'viewAllProductByCategory/:id', component: ViewAllProductsByCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
