//Object oriented programming is JS
// class Bottle{
//     constructor(){
//         this.color = "black";
//         this.material = "steel";
//         this.price = "1032";
//     }

//     fill(){};
//     drink(){};
// }

// var obj = new Bottle();
// console.log(obj.color);


//Call, Apply, Bind
//ek function ma this ki value window hoti ha, agar aap chate ho voh value window na ho, par koi aur object ho tab aap use kr sakte ho call apply bind ka.

let obj = {
    name: "Sourav"
}

function abcd(a, b, c){
    console.log(this, a, b, c);
}

// abcd.call(obj, 1, 2, 3); // fnc chalata ha aur this ki value set karta ha

// abcd.apply(obj, [1, 2, 3]); // same hota ha call ke baas arguments ko array ma paas karna padta ha

var newFnc = abcd.bind(obj, 1, 2, 3);//vahi karta ha jo call karta ha but, bind new function deta ha jisko ham dusre variable ma store karke run karte ha