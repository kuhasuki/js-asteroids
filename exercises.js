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
      return this
    }
  }
  return _curriedSum
}

var curryIt = curriedSum(5);
