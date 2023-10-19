//This is my first Java script Program
console.log("I have found my soulmate as Yunisha Baskota.");

const age = 21;
// age = 31;
console.log(age);

let selectedAge = [34, 45, 35];
selectedAge[4] = "Hello People";
console.log(selectedAge);
//In other programming lagnuages the array must contain the one type of items in it
//But in JS different types data types can be incorporate in a single array.

//Here name is a parameter whereas
function greet(name, l_name) {
  console.log("Hello " + name + " " + l_name);
}
//Prashant ia an argument
greet("Prashant", "Bhattarai");

// ###  Learning Arrays in JS  ###

//Check whether the array contain the certain item

const fruits = ["Apple", "Banana", "Grapes", "Dragonfruit", "Mango"];

// let include = fruits.includes("Yunu");
let include = fruits.indexOf("Prashant") !== -1;
console.log(include);

//Appending the new item to the array
const newLength = fruits.push("Guava");
console.log(fruits);

// Removing the last item from the array
const removeItem = fruits.pop();
console.log(fruits);

// Removing multiple items from the end
item = -2;
const removedItems = fruits.splice(item);
console.log(fruits);

// counting from the first
start = 2;
const removeddItems = fruits.splice(start);
console.log(fruits);

// Removing the first items from the array
const firstRemovedItem = fruits.shift();
console.log(fruits);
