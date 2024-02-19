import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../../shared/models/tag';
import { FoodService } from '../../services/food/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit{
  
  @Input() foodPageTags?:string[];
  @Input() justifyContent:string='center';
  
  tags:Tag[] =[] ;

  constructor(private foodService:FoodService){

  }

  ngOnInit(): void {
    if(!this.foodPageTags)
    {
    this.foodService.getAllTag().subscribe((tags:Tag[])=>{
      this.tags=tags;
    });
  }
  }

}
