let mongoose = require('mongoose');
var ReviewSchema = new mongoose.Schema({
    name:{ type: String, required: true, minlength: 3 },
    stars: {type: Number, required:true},
    description: { type:String, required:true,minlength: 3 }  
},{timestamps: true });
var RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    cuisine:{ type: String, required:true, minlength: 3 },
    image: {type:String, required:true},
    location: {type:String, required:true},
    reviews: [ReviewSchema]
   },{timestamps: true });

const Restaurant = mongoose.model('restaurant', RestaurantSchema);