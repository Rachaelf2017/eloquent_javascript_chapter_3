// 1. Write a range function that takes two arguments, start and end and
// returns an array containing all the numbers from start up to end.
function range(start,end, step){
  range = []
  if (start < end) {
    for (var number = start; number <= end; number = number + step) {
      range.push(number)
      }
    }
  else if (start > end){
    for (var number = start; number >= end; number = number + step) {
      range.push(number)
      }
    }
  else
    console.log("Equal");
  return range
}

console.log(range(10,2,-2));

//2. Write two functions, reverseArray - takes and arg and makes a new array
//with elements in reverse order
// and reverseArrayInPlace - modifies the array to reverse its elements
//can't user .reverse

array = [0,1,2,3,4,5,6,7,8,9]
function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}


console.log(reverseArray(array));
console.log(reverseArrayInPlace(array));

//3. Write a list data structure function.

// Here is a list
var list = {
  value : 1 ,
  rest : {
    value : 2 ,
    rest : {
      value : 3 ,
      rest : null
      }
    }
};

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
