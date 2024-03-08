import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Foods } from '../../shared/models/food';
import { CartItem } from '../../shared/models/cartItem';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();

  constructor(private matSnackBar:MatSnackBar) {
    
  }
  
  addToCart(food:Foods):void{

    let cartItem =this.cart.items.find(item => item.food.id ==food.id);
    if(cartItem){
      return this.changeQuantity(food.id , cartItem.quantity+1);
      
    }
    this.cart.items.push(new CartItem(food));
    this.showSuccessMessage("Item added to cart Succesfully");
  }

  removeFromCart(foodId:number):void{
    this.cart.items= this.cart.items.filter(item =>item.food.id !=foodId);
    this.showSuccessMessage("Item removed from the cart");
  }

  changeQuantity(foodId:number,quantity:number ){
    let cartItem =this.cart.items.find(item =>item.food.id ==foodId);
    if(!cartItem) return;
    cartItem.quantity=quantity;
  }
  
  getCard():Cart
  {
     return this.cart;
  }

  showSuccessMessage(message:string) {
    this.matSnackBar.open(message,'Close',{
      duration:3000,
      horizontalPosition:'end',
      
    })
  }
}
