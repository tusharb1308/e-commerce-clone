import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideCategoryBarComponent } from './components/side-category-bar/side-category-bar.component';
import { CartComponent } from './pages/cartPage/cart/cart.component';
import { ProductModuleModule } from './pages/product-module/product-module.module';
import { ProductComponentComponent } from './components/product-component/product-component.component';
import { allProduct } from 'src/data/allProducts';
import { allCategories } from 'src/data/allCategories';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SideCategoryBarComponent,
    CartComponent,
    // ProductComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModuleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    allProduct,
    allCategories
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
