var express = require('express');
var bodyParser = require('body-parser');
var app = express();



app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get('/', function(request, response){
  response.sendFile('./index.html', {root: './'});
  console.log("sent index");
});




app.get('/greeley', function(request, response){
    response.sendFile('./public/html/greeley.html', {root: './'});
    console.log("sent greeley");
});

app.get('/fort-collins', function(request, response){
    response.sendFile('./public/html/fort-collins.html', {root: './'});
    console.log("sent fort");
});

app.get('/denver', function(request, response){
    response.sendFile('./public/html/denver.html', {root: './'});
    console.log("sent denver");
});

app.get('/breckenridge', function(request, response){
    response.sendFile('./public/html/breckenridge.html', {root: './'});
    console.log("sent breck");
});

app.get('/glenwood', function(request, response){
    response.sendFile('./public/html/glenwood.html', {root: './'});
    console.log("sent glenwood");
});

app.get('/cargo', function(req, res){
    res.sendFile('./public/html/cargo.html', {root: './'});
    console.log('redirect to cargo page');
});

// check if client side score count is correct
app.post('/validate', function(req, res){
    // data from post request
    var data = req.body;
    // check remaining cash based off of current inventory
    var remainingCash = 200 - ((data.beer.inventory * data.beer.cash) + (data.jerky.inventory * data.jerky.cash) + (data.gas.inventory * data.gas.cash) + (data.tapes.inventory * data.tapes.cash));
    // check remaining weight based off of current inventory
    var remainingWeight = 200 - ((data.beer.inventory * data.beer.weight) + (data.jerky.inventory * data.jerky.weight) + (data.gas.inventory * data.gas.weight));
    // check to see if data is different than on client side
    if (remainingCash != data.cash || remainingWeight != data.weight) {
      res.send('nope');
    }
    else {
      res.send('all good');
    }
});



app.listen(8080, function(){
  console.log('running on port 8080')
})
