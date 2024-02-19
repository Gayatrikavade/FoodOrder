import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { Foods } from '../../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
// import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  foods:Foods[]=[];

  constructor(private foodService:FoodService,private router:ActivatedRoute,private route:Router){

  }


  //By Using params search(pass in router)
  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      if(params['searchItem'])
      {
        this.foodService.getAll().subscribe((foods:Foods[])=>{
          this.foods=foods.filter(food=> food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
        });
      }
      else if(params['tags'])
      {
        this.foodService.getAllFoodByTag(params['tags']).subscribe((foods:Foods[])=>{
          console.log('Filtered foods:', foods);
          this.foods=foods;
        });
      }
      else{
        this.foodService.getAll().subscribe((foods:Foods[])=>{
          this.foods=foods;
        }); //done
      }
    })
    
  }

  
}
