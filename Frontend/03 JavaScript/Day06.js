// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let myArr = [1,2,3,4,5]
console.log(myArr)

// Task 2: Access the first and last elements of the array and log them to the console.

let myArr1 = [1,2,3,4,5,6,7]
console.log(myArr1[0])
console.log(myArr1[myArr1.length-1])

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

const myArr2 = [1,2]
console.log(myArr2)
myArr2.push(66)
console.log(myArr2)

// Task 4: Use the pop method to remove the last element from the array and log the updated array.

myArr2.pop()
console.log(myArr2)

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
myArr2.shift()
console.log(myArr2)

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
myArr2.unshift(11)
console.log(myArr2)

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let myArr3 = [1,2,3,5]
let doubledArr = myArr3.map((i) => i*2)
console.log(doubledArr)

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let myArr4 = [1,2,3,4,5,6,7,8,9,10,12,11]
let evenArr = myArr4.filter((i) => i%2 === 0)
console.log(evenArr)

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let sumOfArr = evenArr.reduce((prv, next) => prv+next)
console.log(sumOfArr)

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.

for(item in myArr4){
    console.log(myArr4[item])
}

for(item of myArr4){
    console.log(item)
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("For each")

myArr4.forEach((i) => console.log(i))

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let matrix = [[1,2,3], [11,12,13], [21,22,23]]

console.log(matrix)

// Task 13: Access and log a specific element from the two-dimensional array.

console.log(matrix[0][0])

console.log('\n')

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
