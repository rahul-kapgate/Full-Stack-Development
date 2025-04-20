// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person’s name and age, and log the string to the console.
const Person = {
    "name" : "Rahul",
    "age" : 23
}

console.log(`Hello ${Person.name}. Your age is ${Person.age}`)

// Task 2: Create a multi-line string using template literals and log it to the console.

console.log(`This is line 1 
    this is line 2
    3
    
    4
    
    
    5
    
    this is last line`)

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const myArr = [1,2,3,4,5]

const [first, second] = myArr

console.log(first)
console.log(second)


// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const Book = {
    "title" : "Atomic habbit",
    "author" : "OP king",
    "year" : 1789
}

const {title, author} = Book

console.log(title)
console.log(author)



// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const existingArray = [1,2,3,4,5,6,7,8]
const spreadArray = [...existingArray, 9 , 10, 11, 12]

console.log(existingArray)
console.log(spreadArray)

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

let sum = (...args) => {
    return args.reduce((prev, next) => prev+next)
    // for(let arg in args){
    //     console.log(args[arg])
    // }
}

console.log(sum(10,20,8))

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

const greeting = (name, age = 23) => {
  return `Hello ${name}, your Age is ${age}`;
};

const greet1 = greeting("rahul", 21);
const greet2 = greeting("Deva");

console.log(greet1);
console.log(greet2);

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const brand = "Tesla";
const model = "Model S";
const year = 2023;
const featureKey = "autoPilot";

const car = {
  brand,
  model,
  year,
  [featureKey]: true,
  getDetails() {
    return `${this.brand} ${this.model} (${this.year})`;
  },
};

console.log(car);               
console.log(car.getDetails());  



// Task 9: Create an object with computed property names based on variables and log the object to the console.

const key1 = 'name';
const key2 = 'age';

const obj = {
  [key1]: 'John Doe',
  [key2]: 30
};

console.log(obj);
