(function() {
  'use strict';
  if (typeof Asteroids.Util === "undefined") {
    window.Asteroids.Util = {};
  }

  function Surrogate () {}

  Asteroids.Util.inherits = function (ChildClass, ParentClass){
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    // Syntatic Sugar to use constructor
    ChildClass.prototype.constructor = ChildClass;

  }

  Asteroids.Util.randomVec = function () {
    var xComponent = Math.round(Math.random());
    var yComponent = Math.round(Math.random());
    var xRand = Math.floor(Math.random() * 10) + 1;
    var yRand = Math.floor(Math.random() * 10) + 1;
    return [xComponent * xRand, yComponent * yRand];
  }
}());
