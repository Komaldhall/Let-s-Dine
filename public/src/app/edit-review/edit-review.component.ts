import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit {
  id='';
  rest={name:'', cuisine:'',_id:''};
  review={name:'', stars: 5, description:''};
  rating = [1,2,3,4,5];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log('here in edit review');
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id'];
      console.log(this.id);
      this.getEdit();
    })
  }
  getEdit(){
    let rest = this._httpService.getEditRestaurant(this.id);
    rest.subscribe((data:any)=>{
      this.rest = data;
    })

  }
  onSubmit(){
    
    let tempObservable = this._httpService.addReview(this.review, this.rest._id);
    tempObservable.subscribe((data:any)=>{
      console.log("added review to restaurant");
      console.log(data);
      // window.location.replace("/restaurants/"+this.rest._id);
      this._router.navigate(['/restaurants']);
    })
    // this.author={name:'',quote:'', _id:''};
  }

}
