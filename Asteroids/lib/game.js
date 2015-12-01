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
    for (var i = 0; i < this.NUM_ASTEROIDS; i++){
      this.asteroids.push(new Asteroids.Asteroid(this.randomPosition(), this));
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

      if ((pos[0] - 50) > this.DIM_X) {
        pos[0] = 0 - 50;
      } else if ((pos[0] + 50) < 0) {
        pos[0] = this.DIM_X + 50;
      } else if ((pos[1] - 50) > this.DIM_Y) {
        pos[1] = 0 - 50;
      } else if ((pos[1] + 50) < 0) {
        pos[1] = this.DIM_Y + 50;
      }
    return pos;
  }

}());

// var franquist = new Asteroids.Game(40,40,3);
// console.log(franquist);
