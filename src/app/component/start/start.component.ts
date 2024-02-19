import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  constructor(private route:Router){}
  ngOnInit(){
    alert('Please login!!');
    this.route.navigate(['/log-in']);
   
  }
}
