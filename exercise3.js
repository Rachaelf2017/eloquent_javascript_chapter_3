// 1. Write a function that takes two argument and returns the minimum
//(not using math.min)
function min (first, second) {
  if (first < second)
    return first
  else if (first > second)
    return second
  else
      return "equal"
}

console.log(min(3,2))


// 2. Define a function to decide if the number if odd or even
// without using %

function isEven(number) {
  if (number ==0)
    return true
  else if (number ==1)
    return false
  else if (number < 0)
    return isEven(number * -1)
  else
    return isEven(number-2)
}

console.log(isEven(-44))


//3. Write a function countBs that takes a string and returns how many
  //"B" are in the string

  function countChar(string, char) {
    counter = 0
    for (var loc = 0; loc < string.length; loc = loc +1)
      if (string.charAt(loc) == char)
        counter ++
    return counter

  }

console.log(countChar("Rachael Feuerborn", "e"))
