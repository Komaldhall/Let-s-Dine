let prod = require('../controllers/restaurant.js');
var path = require('path');
module.exports = function(app){
    app.get('/restaurant', prod.index);
    app.get('/restaurant/check/:name', prod.check);
    app.get('/restaurant/:id', prod.get);
    app.post('/restaurant', prod.create);
    //restaurant update
    app.put('/restaurant/:id', prod.update);
    //adding reviews
    app.put('/restaurant/:id/review', prod.review);
    app.delete('/restaurant/:id', prod.destroy);
    app.all("*", (req,res,next)=>{
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
