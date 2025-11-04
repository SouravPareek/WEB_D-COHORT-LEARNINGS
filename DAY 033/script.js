//Ques 1 Print numbers from 1 to 10

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }


//Ques 2 Print only even numbers from 1 to 20

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


//Ques 3 Print numbers from 10 to 1

// for(let i = 10; i > 0; i--){
//     console.log(i);
// }


//Ques 4 Print the word "Yes" 5 times

// for(let i = 1; i <= 5; i++){
//     console.log("Yes");
// }


// Ques 5 Print numbers from 1 to 10 are Odd or Even

// for(let i = 1; i <= 10; i++){
//     if(i% 2 === 0)
//         console.log(`${i} - Even`);
//     else
//         console.log(`${i} - Odd`);
// }


//Ques 6 Ask user for a number and say if it's positive or negative

// let num = +prompt("Number batao");
// if(num > 0)
//     console.log(num + " is Positive");
// else if(num < 0)
//     console.log(num + " is Negative");


// Ques 7 Ask user's age and check if eligible to vote

// let age = +prompt("Age batao");
// if(age >= 18)
//     console.log("You are eligible to vote");
// else{
//     console.log("You are not eligible to vote");
// }


//Ques 8 Print multiplication table of 5

// for(let i = 1; i <= 10; i++){
//     console.log(`5 * ${i} = ${5*i}`)
// }


// Ques 9 Count how many numbers between 1 and 15 are greater than 8

// let cnt = 0;
// for(let i = 1; i <= 15; i++){
//     if(i > 8)
//         ++cnt;
// }

// console.log(cnt);


// Ques 10 Ask user for password and print access status

// let password = "VK18";

// let userRespone = prompt("password?");

// if(userRespone === password)
//     console.log("Access Granted");
// else
//     console.error("incorrect password!");



// Level 2 – Slightly Tougher but Logical
// Ques 11 Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let password = "VK18";
// let userResponse;
// for(let cnt = 1; cnt <= 3; cnt++){
//     userResponse = prompt("password?");

//     if(userResponse === password){
//         console.log("Access Granted");
//         break;
//     }
//     else{
//         if(cnt === 3){
//             console.error("Account Locked");
//             break;
//         }
//         console.log("incorrect password!, Retry pls");
//     }
// }


// Ques 12 Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

let cnt = 0;
let userResponse = "yes";
while(userResponse !== "stop"){
    userResponse = prompt("word pls : ");
    if(userResponse === "yes")
        cnt += 1;
}

console.log(cnt);


// Ques 13 Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// Ques 14 Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// Ques 15 Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// Ques 16 Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// Ques 17 Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// Ques 18 Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// Ques 19 ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”