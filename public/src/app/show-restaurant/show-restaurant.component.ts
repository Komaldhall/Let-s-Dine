import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-restaurant',
  templateUrl: './show-restaurant.component.html',
  styleUrls: ['./show-restaurant.component.css']
})
export class ShowRestaurantComponent implements OnInit {
  restaurant=[{name:'', cuisine:'', image:''}]
  now=Date();
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    let tempObservable = this._httpService.getRestaurant();
    tempObservable.subscribe((data:any)=>{
      this.restaurant = data;
      console.log(data);
    })
  }
  

}
