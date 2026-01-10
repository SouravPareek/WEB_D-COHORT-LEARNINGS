function abcd(fn1){
    fn1(function(fn3){
        console.log("Hello fn1");
        fn3(function(fn4){
            console.log("Hello fn3");
            fn4()
        })
    })
}

abcd(function(fn2){
    console.log("Hello abcd");
    fn2(function(fn4){
        console.log("Hello fn2");
        fn4(function(){
            console.log("Hello fn4");
        })
    })
})