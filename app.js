var express = require('express');
var app = express();

// var veggies =['green', 'red', 'yellow'];
//
// app.get('/', function (req, res) {
//   res.send('<h1>stuffs</h1>');
// });
//
// app.get('/vegetables', function(req, res) {
//   res.send(veggies);
// });
//
// app.get('/hi', function(req, res) {
//   var name = req.query.name;
//   res.send("Welcome");
//
// });
//
// app.get('/hello/:name', function(req, res){
//   res.send("come out come out, " +req.params.name);
// });

app.get('/:operation/:number1/:number2', function(req, res){
  if (req.params.operation === 'add') {
    res.send("<h1 style ='background: yellow; display:inline'>Those add to be: " +
      (Number(req.params.number1) + Number(req.params.number2)));
  } else if (req.params.operation === 'mult') {
    res.send("<h1 style ='background: yellow; display:inline'>Those multiply to be: " +
      (Number(req.params.number1) * Number(req.params.number2)));
  } else if (req.params.operation === "sub") {
    res.send("<h1 style ='background: yellow; display:inline'>Those subtract to be: " +
      (Number(req.params.number1) - Number(req.params.number2)));
  } else if (req.params.operation === 'div') {
    res.send("<h1 style ='background: yellow; display:inline'>Those divide to be: " +
      (Number(req.params.number1) / Number(req.params.number2 ))+'</h1>');
  } else {
    res.send("I can't do that Dave");
  }
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
