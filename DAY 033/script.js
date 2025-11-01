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

let num = +prompt("Number batao");
if(num > 0)
    console.log(num + " is Positive");
else if(num < 0)
    console.log(num + " is Negative");