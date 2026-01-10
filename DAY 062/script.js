// error in js (syntax, logical, runtime)
// error handling try, catch, finally
// (meeage, name, stack)
//how to throw errors in js

// (meeage, name, stack)
// try{
    //     let a = 12;
    //     console.log(a.naem.age);
    // }
    // catch(err){
    //     console.log(err.stack)
    // }
        

//how to throw errors in js
    try{
        let a = 12;
        console.log(a.naem.age);
    }
    catch(err){
        throw new Error("Something went wrong, pls try again")
    }