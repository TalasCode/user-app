import { Component ,OnInit} from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit{
  cartProduct : any[] = [];
  total:any = 0;
  success:boolean = false;
  
  ngOnInit(): void {
    this.getAllCartProduct();
    
  }


  constructor(private Service : ServiceService){}

  getAllCartProduct() {
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
      console.log('Retrieved cart products:', this.cartProduct);
    }
    this.getCartTotal();
  }

  getCartTotal() {
    this.total = 0
    for(let x in this.cartProduct){
      this.total += this.cartProduct[x].quantity * this.cartProduct[x].product.price;
    }
  }
  minsAmount(index:number){
    this.cartProduct[index].quantity --;
    localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
    this.getCartTotal();

  }
  addAmount(index:number){
    this.cartProduct[index].quantity ++;
    localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
    this.getCartTotal()

  }

  detectChange(){
    localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
  }
  deleteProduct(index:number){
    this.cartProduct.splice(index , 1)
    localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
    this.getCartTotal()
  }
  clearCart(){
    this.cartProduct = []
    localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
    this.getCartTotal()
  }

  addCart(){

    let products = this.cartProduct.map(item => {
      return {productId:item.product.id , quantity : item.quantity}
    })
    let Model ={
      userId : 5,
      date: new Date(),
      products: products
    }
    this.Service.createCart(Model).subscribe(res =>{
      this.success = true
      this.clearCart();
      console.log(Model)
    })

  }

}

