function Surrogate () {}

Function.prototype.inherits = function (classConstructor){
  Surrogate.prototype = classConstructor.prototype;
  this.prototype = new Surrogate();
  // Syntatic Sugar to use constructor
  this.prototype.constructor = this;
}

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

console.log(Asteroid.prototype);
console.log(Ship.prototype);
console.log(Asteroid instanceof MovingObject);

function Dog (name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " barks!");
};

function Corgi (name) {
  Dog.call(this, name);
}

Corgi.inherits(Dog);

Corgi.prototype.waddle = function () {
  console.log(this.name + " waddles!");
};

var blixa = new Corgi("Blixa");
blixa.bark();
blixa.waddle();
