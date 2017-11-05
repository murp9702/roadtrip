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

app.post('/validate', function(req, res){
    var data = req.body;
    var remainingCash = 200 - ((data.beer.inventory * data.beer.cash) + (data.jerky.inventory * data.jerky.cash) + (data.gas.inventory * data.gas.cash) + (data.tapes.inventory * data.tapes.cash));

    var remainingWeight = 200 - ((data.beer.inventory * data.beer.weight) + (data.jerky.inventory * data.jerky.weight) + (data.gas.inventory * data.gas.weight));

    console.log("remainingCash " + remainingCash)
    console.log("remainingWeight: " + remainingWeight)
    console.log("data.cash:" + data.cash)
    console.log("data.weight: " + data.weight)

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
