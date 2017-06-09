var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('Allo!');
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
