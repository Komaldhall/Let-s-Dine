import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  getRestaurant(){
    return this._http.get('/restaurant');
  }
  deleteRestaurant(id){
    return this._http.delete(`/restaurant/${id}`);
  }
  addRestaurant(restaurantObj){
    return this._http.post('/restaurant', restaurantObj);
  }
  getEditRestaurant(id){
    return this._http.get(`/restaurant/${id}`);
  }
  editRestaurant(restaurantObj){
    console.log("in edit");
    return this._http.put(`/restaurant/${restaurantObj._id}`, restaurantObj);
  }
  addReview(reviewObj, id){
    console.log("in review");
    return this._http.put(`/restaurant/${id}/review`,reviewObj);
  }
  findRestaurant(name){
    return this._http.get(`/restaurant/check/${name}`);
  }
}
