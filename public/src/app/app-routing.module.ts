import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowRestaurantComponent } from './show-restaurant/show-restaurant.component';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { ShowReviewComponent } from './show-review/show-review.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { EditReviewComponent } from './edit-review/edit-review.component';

const routes: Routes = [
  { path: '' , pathMatch:'full', redirectTo:'restaurants'},
  { path:'restaurants', component:ShowRestaurantComponent, children:[
    { path:'new', component:NewRestaurantComponent},
  ]},
  { path: 'restaurants/:id',component:ShowReviewComponent, children:[
    { path:'review', component:EditReviewComponent},
    { path:'edit', component:EditRestaurantComponent},
  ]},
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
