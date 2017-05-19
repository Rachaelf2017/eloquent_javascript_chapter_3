//Objects and Arrays
var array = [2,3,4,5]
console.log(array[1])

//Properties
/* value.x fetches property x of value
   value[x] evaluates x then fetches that value property of value
   */


//Method
//properties that refer to functions
var mack = []
mack.push("Mack")
mack.push("the", "knife")
console.log(mack)
console.log(mack.join(" "))
console.log(mack.pop())
console.log(mack)


//Objects
var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza"]
}
console.log(day1)
console.log(day1.squirrel)
day1.wolf = false
console.log(day1)

//Mutability
var object1 = { value : 10};
var object2 =object1 ;
var object3= { value : 10};

console.log(object1 == object2);
//--> true
console.log(object1 == object3);
//--> false


//Map
// a way to go from values in one domain to another
// for (var event in map)
  //do something


// Shift & unshift
var todoList = []
function rememberTo(task) {
  todoList.push(task)
  //added to end
}
function next() {
  return todoList.shift()
  //shows and removes first
}
function urgent(task) {
  todoList.unshift(task)
  //adds to beginning
}

//index & slice
console.log([1,2,3,4,5].indexOf(2));
//--> 1

console.log([1,2,3,4,5].slice(2,4));
//-- [3,4]
console.log([1,2,3,4,5].slice(2));
//-->[3,4,5]
