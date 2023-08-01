import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductsModuleComponent } from './products-module.component';
import { ProductsRoutingModule } from './products-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponentComponent } from 'src/app/components/product-component/product-component.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'

@NgModule({
  declarations: [
    DeleteProductComponent,
    AddProductComponent,
    ViewAllProductsComponent,
    UpdateProductComponent,
    ViewAllProductsByCategoryComponent,
    ViewProductComponent,
    HomePageComponent,
    ProductsModuleComponent,
    ProductComponentComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports:[
    DeleteProductComponent,
    AddProductComponent,
    ViewAllProductsComponent,
    UpdateProductComponent,
    ViewAllProductsByCategoryComponent,
    ViewProductComponent,
    HomePageComponent,
    ProductsModuleComponent
  ]
})
export class ProductModuleModule { }
