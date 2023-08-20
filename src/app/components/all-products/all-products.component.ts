import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductComponent implements OnInit {
  products: any[] = []
  category: any[] = []
  loading : boolean =false;
  cartProduct: any[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe((res:any) => {
      this.loading = false;
      this.products = res;
    }, error =>{
      this.loading = false;
      alert("Error")
    })
  }


  getCategories(){
    this.loading = true;
    this.service.getAllCategories().subscribe((res:any) =>{
      this.loading = false;
      this.category = res;
    }, error =>{
      this.loading = false;
      alert("Error")
    })
  }

  
  filterCategory(event: any) {
    this.loading = true;
    let value = event.target.value;
    if (value !== "all") {
      this.getProductsCategory(value);
    }
    else this.getProducts();
  }

  getProductsCategory(keyword:string){
    
    this.service.getProductsByCategory(keyword).subscribe((res:any) => {
      this.loading = false;
      this.products = res;
    })
  }
  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProduct.find(item => item.product.id == event.product.id)
      if(exist) {
        alert("product is already in your cart")
      }
      else{
        this.cartProduct.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
      }
      
    }else{
      this.cartProduct.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
    
    }
    
  }
  

}
