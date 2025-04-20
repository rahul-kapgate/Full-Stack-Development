// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let num = -4;

if (num === 0) {
  console.log("ZERO");
} else if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Nagative");
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

age = 17;

if (age >= 18) {
  console.log("Can Vote");
} else {
  console.log("Can't vote");
}

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 30;
let num2 = 40;
let num3 = 20;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1);
  } else {
    console.log(num3);
  }
} else if (num2 > num3) {
  if (num2 > num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
} else {
  console.log(num3);
}

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1–7) and log the day name to the console.

day = 7;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  case 4:
    console.log("4");
    break;
  case 5:
    console.log("5");
    break;
  case 6:
    console.log("6");
    break;
  case 7:
    console.log("Sunday i love this");
    break;

  default:
    console.log("Enter a valid day");
    break;
}
// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

const marks = 86;

switch (true) {
  case marks >= 90:
    console.log("Grade A");
    break;

  case marks >= 80:
    console.log("Grade B");
    break;

  case marks >= 70:
    console.log("Grade C");
    break;

  case marks >= 60:
    console.log("Grade D");
    break;

  default:
    console.log("Failed");
}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let input = 5;

input % 2 === 0 ? console.log("EVEN") : console.log("ODD");

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

// Divisible by 4: Generally, any year divisible by 4 is a leap year.
// Century Years: Century years (years ending in "00", like 1900) are exceptions.
// They are only leap years if they are also divisible by 400 (like 2000)

const year = 3000;

if (year % 4 === 0) {

  if (year % 100 === 0) {
    
    if(year%400 === 0){
      console.log("Leap year.")
    }
    else{
      console.log("Not a leap year !")
    }

  }else{
    console.log("leap year..")
  }

} else {
  console.log("Not a leap Year !!");
}


// if (year % 400 === 0) {
//   console.log("Leap year.");
// } else if (year % 100 === 0) {
//   console.log("Not a leap year!");
// } else if (year % 4 === 0) {
//   console.log("Leap year.");
// } else {
//   console.log("Not a leap year!");
// }

