function sum () {
  var myArgs = [].slice.call(arguments);

  var sumTotal = 0;

  myArgs.forEach(function(number) {
    sumTotal += number;
  });
  return sumTotal;
}

console.log(sum(1,2,3,4,5));

Function.prototype.myBind = function (ctx) {
  var myArgs = [].slice.call(arguments, 1);
  var fn = this;

  return function () {
    var myArgs2 = [].slice.call(arguments);
    return fn.apply(ctx, myArgs.concat(myArgs2));
  }
}

function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound) {
  console.log(this.name + " says " + sound + "!");
}

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");

markov.says("meow");
// Markov says meow!

markov.says.myBind(breakfast, "meow")();
// Breakfast says meow!

markov.says.myBind(breakfast)("meow");
// Breakfast says meow!

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow");
// Breakfast says meow!

function curriedSum(numArgs) {
  var numbers = [];

  var _curriedSum = function (number) {
    numbers.push(number);
    var totalSum = 0;

    if (numbers.length === numArgs) {
      numbers.forEach(function (value) {
        totalSum += value;
      });
      return totalSum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum
}

// var notSum = curriedSum(4);
// console.log(notSum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
  var argsContainer = [];
  var meIs = this;
  var _curried = function (arg) {
    argsContainer.push(arg);

    if (argsContainer.length === numArgs) {
      return meIs.apply(null, argsContainer);
    } else {
      return _curried;
    }
  }
  return _curried;
}

console.log(sum.curry(3)(2)(3)(4));
