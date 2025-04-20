// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function isOddEven(num){
    num%2 === 0 ? console.log("Even") : console.log("Odd")
}

isOddEven(5)
isOddEven(8)

// Task 2: Write a function to calculate the square of a number and return the result.

function numSqr(n){
    return n**2
}

let res = numSqr(11)
console.log(res)

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const findMAX = function(i, j){
    return Math.max(i,j)
}

const max = findMAX(144,55)
console.log('Max : ', max)

// Task 4: Write a function expression to concatenate two strings and return the result.

const twoString = function(str1, str2){
    return str1 + str2
}

let concatenateString = twoString("rahul ", "kapgate")
console.log(concatenateString)

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let twoSum = (num1, num2) => {
    return num1 + num2
}

console.log("Twosum : ",twoSum(10, 12))

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const checkChar = (str,character) => {
    let res = str.includes(character);
    return res
}

let result = checkChar("Rahul", "b")
console.log(result)

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const product = (name, product = "prod 1") => {
    return `${name} + ${product}`
}

const returnProduct1 = product("test", 'test 1')
const returnProduct2 = product("test 2")

console.log(returnProduct1)
console.log(returnProduct2)


// Task 8: Write a function that takes a person’s name and age and returns a greeting message. Provide a default value for the age.

const greeting = (name, age=23) =>{
    return `Hello ${name}, your Age is ${age}`
} 

const greet1 = greeting("rahul", 21)
const greet2 = greeting("Deva")

console.log(greet1)
console.log(greet2)


// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

// function test1(){
//     console.log("Test 1")
// }

// function test2(func){
//     console.log("test 2")
//     func()
// }

// test2(test1)


function myFunc(){
    console.log("My function being called !")
}

function callbackFunc(num, func){
    for(let i=1; i<= num; i++){
        func()
    }
}

callbackFunc(4, myFunc)

// Task 10: Write a higher-order function that takes two functions and a value, 
// applies the first function to the value, and then applies the second function to the result.

function myfuncOne(value){
    // console.log("My func 1")
    return value*2
}

function myFuncTwo(n){
    // console.log("My func two")
    // console.log(n**2)
    return n**2
}


function myCallbackfunc(value, func1,func2){
    let res = func1(value)
    // console.log(res)
    const res2 = func2(res)
    return res2

}


const res1 = myCallbackfunc(2, myfuncOne, myFuncTwo)
console.log(res1)