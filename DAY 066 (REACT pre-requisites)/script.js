//Destructuring of obj and arr

// var obj = {
//     name : "Sourav",
//     age : 21,
//     city : "Jaipur",
//     skills : ['HTML', 'CSS', 'JS']
// }

// // var {age, name} = obj

// var {skills} = obj

// var [first,...newSkills] = skills



//default export har file kevel ek baar kar sakti ha
//but import multiple times kar sakti ha
import person from './app.js'//default export ko dusre name se abhi export kar sakte ha

console.log(person);

 // importing named export, import karte time curly brackets ka use karna padega, changed name ka use nahi kar sakte , original name hi use karna padega
import {city} from './app.js'
import {age} from './app.js'

console.log(user, age, city);