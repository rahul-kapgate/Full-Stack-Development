// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for(let i=1; i<=10; i++){
    console.log(i)
}

console.log('\n')

let i= 1;
while(i <= 10){
    console.log(i)
    i++
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

console.log("Table")

const Table = 5

for (let i = 1; i <= 10; i++) {
  console.log(i*Table);
}

console.log("\n");

let num = 1;
while (num <= 10) {
  console.log(num*Table);
  num++;
}

// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

console.log("Sum")

let numbers = 1
let sum = 0

while(numbers <= 10){
    sum += numbers
    numbers++
}

console.log(sum)

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

console.log("Revers Order")

for(let i=10; i>=1; i--){
    console.log(i)
}

// Activity 3: Do...While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

console.log('\n')

let Varr2 = 1
do{
    console.log(Varr2)
    Varr2++
}while(Varr2 <= 5)

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let num1 = 5
let fact = 1

do{
    fact = num1 * fact
    num1--
}while(num1 >= 1)

console.log("Fact : ", fact)

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops.
// *
// **
// ***
// ****
// *****


let stars = 5

let res = ''

for(let i=0; i<stars; i++){
    for(let j=0; j<i+1; j++){
        res += '* '
    }
    res += '\n'
}

console.log(res)


// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for(let i=1; i<=10; i++){
    if( i==5){
        continue;
    }

    console.log(i)
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

console.log('\n')

for(let i=1; i<= 10; i++){
    if(i === 7){
        break;
    }
    console.log(i)
}