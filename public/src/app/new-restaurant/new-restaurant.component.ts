import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {
  newRest={name:'', cuisine:'', image:'', location:''};
  msg='';
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log('m in new');
    this.msg='';
    this.newRest={name:'', cuisine:'', image:'', location:''};
  }
  onSubmit(){
    console.log(this.newRest);
    if(this.newRest.name!='' && this.newRest.cuisine!='' && this.newRest.image!='' && this.newRest.location!=''){
      let check = this._httpService.findRestaurant(this.newRest.name.toLowerCase());
      check.subscribe((data:any)=>{
        console.log(data);
        if(data==null){
          let tempObservable = this._httpService.addRestaurant(this.newRest);
          tempObservable.subscribe((data:any)=>{
            console.log("added");
            console.log(data);
            window.location.replace("/restaurants");
            // this._router.navigate(['/restaurants']);
          })
        }
        else if(data.errors){
          let tempObservable = this._httpService.addRestaurant(this.newRest);
          tempObservable.subscribe((data:any)=>{
            console.log("added");
            console.log(data);
            window.location.replace("/restaurants");
            // this._router.navigate(['/restaurants']);
          })
        }
        else{
          console.log('not added');
          this.msg = 'This restaurant already exists!!';
        }
      })
    }
    else{
      this.msg = "Please add restaurant details";
    }
    
  }
  

}
