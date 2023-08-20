import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data:any;
  @Output() item = new EventEmitter();
  addButton : boolean = false
  amount:number=0

  ngOninit(){
  }

add(){
  this.item.emit({product: this.data , quantity : this.amount})
}
}