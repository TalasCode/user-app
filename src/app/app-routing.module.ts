import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AllProductComponent } from './components/all-products/all-products.component';
import { ProductDetailesComponent } from './components/details-product/details-product.component';
import { CartsComponent } from './components/carts/carts.component';

export const routes: Route[] = [
  {path :"product" , component:AllProductComponent},
  {path : "details/:id" , component:ProductDetailesComponent},
  {path : "cart" , component : CartsComponent},
  {path : "**" , redirectTo:"product", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
