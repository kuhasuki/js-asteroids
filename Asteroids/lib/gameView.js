/* global = Asteroids */

(function() {
  'use strict';

  if (typeof Asteroids.GameView === "undefined") {
    window.Asteroids.GameView = {};
  }

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }
  GameView.prototype.start = function () {
    var game = this.game;
    var ctx = this.ctx;

    setInterval(function () {
      game.moveObjects();
    }, 20)

    setInterval(function () {
      game.draw(ctx);
    }, 10);
    };

  // Gameview.prototype.start = function () {
  //   var game = this;
  //
  //   setInterval(function () {
  //     game.moveObjects.bind(game);
  //     game.draw.bind(game, game.ctx);
  //   }, 20);
  // }
  //

}());
