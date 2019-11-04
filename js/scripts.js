//Business Logic for Places Travelled//
function PlacesTraveled(location, landmarks, timeOfYear, notes) {
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes
}
PlacesTraveled.prototype.showAll = function(){
  return this.location + this.landmarks + this.timeOfYear + this.notes;
}

var hawaii = new PlacesTraveled('Maui ', 'Coconut Stand ', 'Winter ', 'Warm ocean and hot sand. It can burn your feet. ');
var newYork = new PlacesTraveled('New York City ', 'Times Square ', 'Summer ', 'Loud and Expensive. It sucked. ');
var berlin = new PlacesTraveled('Berlin ', 'Berlin Wall ', 'Fall ', 'Grunge and parties. ');

$(document).ready(function(){
  $("#hawaii").click(function(){
    $("#hawaiiResult").text(hawaii.showAll())
  })
  $("#newYork").click(function(){
    $("#newYorkResult").text(newYork.showAll())
  })
  $("#berlin").click(function(){
    $("#berlinResult").text(berlin.showAll())
  })
});
