import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  name:string="name"
  addToCart:number=0;
product={
  name:"iPhone 13",
  price:999,
  color:"red",
  discount:8.5,
  inStock:10,
  pImage:"https://imgs.search.brave.com/ctTA9BjlwSsGEGwoaIAb37hhoHk_n1qM1t8F2fzvfl0/rs:fit:860:0:0/g:ce/aHR0cDovL3dlYnJl/c2l6ZXIuY29tL2lt/YWdlczIvYmlyZDFf/YmVmb3JlLmpwZw"
}
getDiscountedPrice(){
  return this.product.price-(this.product.price*this.product.discount/100);
}
onNameChange(event:any){
  console.log(event.target.name,event);
  this.name=event.target.value
}
increment(){
if(this.addToCart<this.product.inStock){
  this.addToCart++;
}
}
decrement(){
  if(this.addToCart>0){
    this.addToCart--;
  }
}
   list:string[] = ["Mark", "Steve", "Narendra", "Panchal"]
}
