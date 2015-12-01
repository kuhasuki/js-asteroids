(function() {
  'use strict';
  if (typeof Asteroids.Game === "undefined") {
    window.Asteroids.Game = {};
  }

  var Game = Asteroids.Game = function (DIM_X, DIM_Y, NUM_ASTEROIDS){
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.NUM_ASTEROIDS = NUM_ASTEROIDS;
    this.asteroids = [];
    this.addAsteroids();

  }

  Game.prototype.addAsteroids = function() {
    var thisWeNeed = this;
    for (var i = 0; i < thisWeNeed.NUM_ASTEROIDS; i++){
      thisWeNeed.asteroids.push(new Asteroids.Asteroid(thisWeNeed.randomPosition()));
    }
  }

  Game.prototype.randomPosition = function() {
    var randomX = Math.floor(Math.random() * this.DIM_X) + 1;
    var randomY = Math.floor(Math.random() * this.DIM_Y) + 1;
    return [randomX, randomY];
  }

  Game.prototype.draw = function(ctx) {
    ctx.clearRect( 0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach(function(asteroid){
      asteroid.draw(ctx);
    });
  }

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(asteroid){
      asteroid.move();
    });
  }

  Game.prototype.wrap = function (pos) {

      if (pos[0] > this.DIM_X) {
        pos[0] = 0;
      } else if (pos[0] < 0) {
        pos[0] = this.DIM_X;
      } else if (pos[1] > this.DIM_Y) {
        pos[1] = 0;
      } else if (pos[1] < 0) {
        pos[1] = this.DIM_Y;
      }
    return pos;
  }

}());

// var franquist = new Asteroids.Game(40,40,3);
// console.log(franquist);
