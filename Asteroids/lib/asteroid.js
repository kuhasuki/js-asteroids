(function() {
  'use strict';

  if (typeof Asteroids.Asteroid === "undefined") {
    window.Asteroids.Asteroid = {};
  }
  var items = ["#00CCFF", "#00f058", "#0018f0", "#f0f000", "#f00000"]
  var DEFCOLOR = items[Math.floor(Math.random()*items.length)];
  var DEFRADIUS = 50;

  var Asteroid = Asteroids.Asteroid = function (pos, game) {
    Asteroids.MovingObject.call(this, pos, Asteroids.Util.randomVec(), DEFRADIUS,items[Math.floor(Math.random()*items.length)], game );
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
// console.log(Asteroid.prototype.constructor);
// var paul = new Asteroid([15, 12]);
// console.log(paul);


}());
