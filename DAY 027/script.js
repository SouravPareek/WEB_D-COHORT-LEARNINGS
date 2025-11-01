alert("Name likh be dalle");

let nm = prompt("name ?");
console.log("Hello "+ nm);

function rps(user, comp){
    
    
    if(user < comp)
        console.log(nm + " Won!");
    else if(user == comp){
        console.log("Draw!");
    }else if(user > comp){
        console.log("Computer Won!");
    }else{
        console.log("Invalid Choice!")
    }

}
let user = prompt(nm + " Choose for user(1 - Rock, 2 - Paper, 3 - Scissor)");
let comp = prompt(nm + " Choose for computer(1 - Rock, 2 - Paper, 3 - Scissor)");
rps(user, comp)
