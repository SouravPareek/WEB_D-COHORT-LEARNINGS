//class expression, hoisting, inheritence, getter & setter

//class expression
// let Animal = class{
//     constructor(a, b){
//         this.name = a
//         this.breed = b
//     }
// };

// let an1 = new Animal("dogesh", "street")


//inheritance
//agar koi class hai jismenin kuch features ha, and agar aap mante ho ek nayi class usi class ka extension hai to app wo saare fetaures purani class se borrow kar sakte ho and nayi class mein use kar sate ho and naye fetaure bhi add kar sakte ho
// class Animal{
//     constructor(){
//         this.hands = 2
//         this.legs = 2
//     }
//     eat(){}
//     speak(){}
// };

// class Crab extends Animal{
//     constructor(){
//         super()
//         this.hands = 0
//         this.legs = 8
//     }
//     bite(){}
//


// getter & setter
class Student{
    constructor(){
        this._age = 17
    }

    get age(){
        return this._age
    }

    set age(val){
        if(val < 0){
            console.log("Invalide age");
            return;
        }
        this._age = val;
        return this._age;
    }
}

let s = new Student()
console.log(s.age);
s.age = 37
console.log(s.age);
