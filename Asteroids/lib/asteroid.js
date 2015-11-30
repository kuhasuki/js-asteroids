(function() {
  'use strict';

  if (typeof Asteroids.Asteroid === "undefined") {
    window.Asteroids.Asteroid = {};
  }
  var DEFCOLOR = "#00CCFF"
  var DEFRADIUS = 50;

  var Asteroid = Asteroids.Asteroid = function (pos) {
    Asteroids.MovingObject.call(this, pos, Asteroids.Util.randomVec(), DEFRADIUS,DEFCOLOR );
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
console.log(Asteroid.prototype.constructor);
var paul = new Asteroid([15, 12]);
console.log(paul);


}());
