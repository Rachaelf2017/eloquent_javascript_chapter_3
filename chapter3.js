// Functions - wrapping a piece of programming in a value

var square = function(x) {
  return x * x
};

console.log(square(12));

var power = function(base, exponent) {
  var result = 1
  for (var count =0; count < exponent; count++)
    result *=base
  return result
};

console.log(power(2,3))

// Understanding scope
var x = "outside"

var f1 = function() {
  var x = "inside f1";
}

f1()
console.log(x)

var f2 = function() {
  x = "inside f2";
}
f2()
console.log(x)

// Nested scope works the same way

// declaration notions
function square(x) {
  return x * x
}


// Closure
function wrapValue(n) {
  var localVariable = n
  return function () {return localVariable}
}

var wrap1 = wrapValue(1)
var wrap2 = wrapValue(2)
console.log(wrap1())
console.log(wrap2())
//being able to reference a specific instance of a local variable
//in an emclosing function is called closure

function multiplier(factor) {
  return function(number) {
    return number * factor;
  }
}

var twice = multiplier(2)
console.log(twice(5))
// same as
console.log(multiplier(2)(5))

// Recursion
// function calls itself

function power(base, exponent) {
  if (exponent == 0)
    return 1
  else
    return base * power(base, exponent - 1)
}

console.log(power(2,3))
//this way is way slower than looping - elegance vs. efficiency tradeoff


// Puzzle: start with 1, either add 5 or multiply by 3 to reach a certain number
function findSolution(target) {
  function find(start, history) {
    if (start==target)
      return history
    else if (start>target)
      return null
    else
        return find(start + 5, "(" + history + " + 5)" )||
        find(start * 3, "(" + history + " * 3)" )
  }
  return find(1, "1")
}

console.log(findSolution(3))
