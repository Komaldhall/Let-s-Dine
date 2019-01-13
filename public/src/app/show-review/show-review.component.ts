import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css']
})
export class ShowReviewComponent implements OnInit {
  restaurant=[{name:'', cuisine:'', reviews:[]}]
  id='';
  display = 0;
  show=0;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }
    
    ngOnInit() {
      this.display = 0;
      this.show=0;
      this._route.params.subscribe((params:Params)=>{
        this.id = params['id'];
        console.log(this.id);
        this.getEdit();
      })
    }
    getEdit(){
      let tempObservable = this._httpService.getEditRestaurant(this.id);
      tempObservable.subscribe((data:any)=>{
        this.restaurant = data;
        console.log(data);
        if(data.reviews.length){
          this.display = 1;
        }
        if(data.createdAt>=new Date(new Date().setSeconds(new Date().getSeconds()-30)).toISOString()){
          this.show=1;
        }
        
    })
  }
  onDelete(id){
    let rest = this._httpService.deleteRestaurant(id);
    rest.subscribe((data:any)=>{
      console.log(data);
      this._router.navigate(['/restaurants']);
    })
  }
  

}
