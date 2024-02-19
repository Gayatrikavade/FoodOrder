import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiUrl='http://localhost:3000/foods';
  private tagsUrl = 'http://localhost:3000/tags'; 

  constructor(private http:HttpClient) { }


  getFoodById(id:number):Observable<Foods>
  {
   return this.http.get<Foods>(`${this.apiUrl}/${id}`);
  }

  getAllFoodByTag(tag:string):Observable<Foods[]>
  {
    if (tag === 'All') {
      return this.getAll();
    } 
    else{
    return this.http.get<Foods[]>(this.apiUrl).pipe(
      map(foods => foods.filter(food => food.tags?.includes(tag)))
    );
    }
  }

  getAllTag():Observable<Tag[]>
  {
    return this.http.get<Tag[]>(this.tagsUrl);
  }
  getAll():Observable<Foods[]>
  {
    return this.http.get<Foods[]>(this.apiUrl);
  }

}

