import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

getAllProducts(){
  return this.http.get('https://fakestoreapi.com/products')
}
getAllCategories(){
  return this.http.get('https://fakestoreapi.com/products/categories')
}

getProductsByCategory(keyword:string){
  return this.http.get('https://fakestoreapi.com/products/category/' + keyword)
}
getProductById(id:any){
  return this.http.get('https://fakestoreapi.com/products/' + id)
}
createCart(model:any){
  return this.http.post("https://fakestoreapi.com/carts" , model )
}

}
