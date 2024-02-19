import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../services/food/food.service';
import { Foods } from '../../shared/models/food';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent implements OnInit{

  food!: Foods;

  constructor(private route:ActivatedRoute ,
    private foodService:FoodService,
    private cartService:CartService,
    private router:Router)
    { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['id']){
        this.foodService.getFoodById(params['id']).subscribe((food:Foods)=>{
          this.food=food;
        });
      }
    });
  }
  addToCart(){
    if(this.food){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
    }
  }
}
