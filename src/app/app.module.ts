import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartsComponent } from './components/carts/carts.component';
import { ProductComponent } from './components/product/product.component';
import { AllProductComponent } from './components/all-products/all-products.component';
import { ProductDetailesComponent } from './components/details-product/details-product.component';
import { HeaderComponent } from './components/commun/header/header.component';
import { SpinnerComponent } from './components/commun/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SelectComponent } from './components/commun/select/select.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CartsComponent,
    ProductComponent,
    AllProductComponent,
    ProductDetailesComponent,
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
