let mongoose = require('mongoose');
var Restaurant = mongoose.model('restaurant')

module.exports = {
    index: function(req, res) {
        Restaurant.find({},function(err, restaurant){
            if(err) {
                console.log('something went wrong with index');
                res.json(err);
            } else { 
                console.log('successfully retrieved Restaurant!');
                res.json(restaurant);
            }
        })
        
    },
    check:function(req,res){
        Restaurant.findOne({name: req.params.name},function(err, restaurant){
            if(err) {
                console.log('something went wrong with show');
                res.json(err);
            } else { 
                console.log('successfully retrieved Restaurant!');
                res.json(restaurant);  
               
            }
        })
    },
    create: function(req, res) {
        var restaurant = new Restaurant({name: req.body.name, cuisine:req.body.cuisine, image:req.body.image, location:req.body.location});
        restaurant.save(function(err) {
            if(err) {
                console.log('something went wrong');
                res.json(err);
                
            } else { 
                console.log('successfully added a Restaurant!');
                res.json(restaurant);  
            }
            
        })
    },
    get: function(req, res) {
        // ,{$sort:{reviews:{stars:-1}}}
        Restaurant.findOne({_id: req.params.id},function(err, restaurant){
            if(err) {
                console.log('something went wrong with show');
                res.json(err);
                // for(var key in err.errors){
                //     req.flash('mongoerror', err.errors[key].message);
                // }
                // res.redirect('/');
            } else { 
                console.log('successfully retrieved Restaurant!');
                res.json(restaurant);  
               
            }
        })
       
    },
    update:function(req, res) {
        console.log('here in update');
        Restaurant.findOne({_id:req.params.id}, function(err,restaurant){
            if(err) {
                console.log('something went wrong');
                res.json(err);
                // for(var key in err.errors){
                //     req.flash('mongoerror', err.errors[key].message);
                // }
                // console.log(err);
            } else { 
                restaurant.name=req.body.name;
                restaurant.cuisine = req.body.cuisine;
                restaurant.location = req.body.location;
                restaurant.image = req.body.image;
                restaurant.save(function(err) {
                    if(err) {
                        console.log('something went wrong');
                        res.json(err);
                        // for(var key in err.errors){
                        //     req.flash('mongoerror', err.errors[key].message);
                        // }
                        // console.log(err);
                        
                    } else { 
                        console.log('successfully added a Restaurant!');
                        res.json(restaurant);  
                    }
                    
                }) 
            }
        })
    },
    review:function(req, res) {
        console.log("here in review");
        Restaurant.update({_id:req.params.id}, {$push:{reviews: {name:req.body.name, stars: req.body.stars, description:req.body.description}}}, {upsert: true}, function(err, rest){
            if(err){
                res.json(err);
            }
            else{
                res.json(rest);
            }    
        })
    },
        
    destroy: function(req, res){
        Restaurant.remove({_id:req.params.id},function(err, restaurant){
            if(err) {
                console.log('something went wrong with destroy');
                res.json(err);
            } else { 
                console.log('successfully destroyed Restaurant!');
                res.json(restaurant);  
            }
        })
    }

};