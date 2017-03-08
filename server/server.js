var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/score')

var db = mongoose.connection;
var inputScore;

//routes go here
app.get('/value', function(req, res) {

  inputScore = req.query.score;
  inputName = req.query.name;

  input(inputName, inputScore).save(function(err,data) {
    if (err) console.log(err);
  });

});

//database connection
db.on('error', function(err) {
  console.log('connection error', err);
});
db.once('open', function() {
  console.log('connected');
});

//database insertions and definitions
var Schema = mongoose.Schema;
var highscoreSchema = new Schema ({
  name:  String,
  score: Number
});

var highscore = mongoose.model('highscore', highscoreSchema);

var input = function(a, b) {
  var newRow = new highscore ({
    name:  a,
    score: b
  });
  return newRow;
}

//start the server
app.listen(port);
console.log('Server started! At http://localhost:'+port);
