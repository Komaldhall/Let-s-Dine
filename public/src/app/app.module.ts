import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpService } from './http.service';
import{ HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowRestaurantComponent } from './show-restaurant/show-restaurant.component';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { ShowReviewComponent } from './show-review/show-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowRestaurantComponent,
    NewRestaurantComponent,
    EditRestaurantComponent,
    ShowReviewComponent,
    EditReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
