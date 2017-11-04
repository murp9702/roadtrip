var express = require('express');

var app = express();



app.use(express.static("./public"));

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


app.listen(8080, function(){
  console.log('running on port 8080')
})
