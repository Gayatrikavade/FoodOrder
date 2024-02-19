import { Component, OnInit } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../shared/models/cartItem';
import { FoodService } from '../../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService:CartService ){
    
    this.setCart();
  }
  ngOnInit():void{

  }

  setCart(){
    this.cart=this.cartService.getCard();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart()    // INSTANCE LOAD DATA
  }

  changeQuantity(cartItem :CartItem ,quantityInString:string){
    const quantity =parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();

  }

}
