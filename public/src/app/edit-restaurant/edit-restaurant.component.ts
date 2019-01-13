import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  id='';
  rest={name:'', cuisine:'', image:'' , location:''};
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id'];
      console.log("m here in update restaurant");
      console.log(this.id);
      this.getEdit();
    })
  }
  getEdit(){
    let rest = this._httpService.getEditRestaurant(this.id);
    rest.subscribe((data:any)=>{
      this.rest = data;
      console.log(data);
    })

  }
  onSubmit(){
    console.log('here is updated one',this.rest);
    this.rest.name=this.rest.name.toLowerCase();
    let tempObservable = this._httpService.editRestaurant(this.rest);
    tempObservable.subscribe((data:any)=>{
      console.log("edit restaurant");
      console.log(data);
      this._router.navigate(['/restaurants']);
    })
  }
}
