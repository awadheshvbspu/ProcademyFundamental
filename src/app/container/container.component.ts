import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
listOfString:string[] = ['Mark', 'Steve','Merry','John','Sarah']

searchText:string = '';

setSearchText(value:any){
  this.searchText =value;
}
@ViewChild(ProductListComponent) productListComponent:ProductListComponent;
//  name:string='iPhone 15';
//  price:number=999;
//  color:string='Red';
// name= 'John Doe';
// addToCart:number=0;
// product={
//   name:'iphone 14',
//   price: 789,
//   color: 'Black',
//   discount: 8.5,
//   inStock:10,
//   pImage:"../../assets/brand.png"
// }

// getDiscountedPrice(){
// return this.product.price - (this.product.price + this.product.discount / 100)
// }
// onNameChange(event:any){
//   // this.name="Mark"
//   // console.log(event);
//   // console.log(event.target.value);
//   // this.name=event.target.value;
  
// }

// decrementCartValue(){
//   if(this.addToCart>0){

//     this.addToCart--;
//   }
// }
// incrementCartValue(){
//   if(this.addToCart < this.product.inStock){

//     this.addToCart++;
//   }
// }
}
