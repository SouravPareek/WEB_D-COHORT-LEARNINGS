// SECTION 1: Objects and OOPS Thinking (Foundation)
	// 1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
        // let user = {
        //     name:"Sourav",
        //     email:"sourav@example.com",
        //     login(){
        //         console.log("User logged in..");
        //     }
        // }
        // console.log(user.login());
        

	// 2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class. Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
        /*Without using class*/
            // let user1 = {
            //     name:"Sourav",
            //     email:"sourav@example.com",
            //     login(){
            //         console.log("User logged in..");
            //     }
            // }
            // let user2 = {
            //     name:"Sourav",
            //     email:"sourav@example.com",
            //     login(){
            //         console.log("User logged in..");
            //     }
            // }
            // let user3 = {
            //     name:"Sourav",
            //     email:"sourav@example.com",
            //     login(){
            //         console.log("User logged in..");
            //     }
            // }
            // let user4 = {
            //     name:"Sourav",
            //     email:"sourav@example.com",
            //     login(){
            //         console.log("User logged in..");
            //     }
            // }
            // let user5 = {
            //     name:"Sourav",
            //     email:"sourav@example.com",
            //     login(){
            //         console.log("User logged in..");
            //     }
            // }

        /*Using class*/
            // class User{
            //     constructor(name, email){
            //         this.name = name;
            //         this.email = email;
            //     }
            //     login(){
            //         console.log("User logged in..");
            //     }
            // }

            // let user1 = new User("Sourav", "sourav@xample.com")
            // user1.login()
            // let user2 = new User("Sourav", "sourav@xample.com")
            // user1.login()
            // let user3 = new User("Sourav", "sourav@xample.com")
            // user1.login()
            // let user4 = new User("Sourav", "sourav@xample.com")
            // user1.login()
            // let user5 = new User("Sourav", "sourav@xample.com")
            // user1.login()


	// 3.	Create a product object that stores name and price and has a method which returns the final price after discount.
        // let obj = {
        //     name: "Cadbury",
        //     price: "280",
        //     discountedPrice: function(){
        //         return (this.price - 0.05*this.price)
        //     }
        // }

        // console.log(obj.discountedPrice());
        

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// ⸻

// SECTION 2: Classes and Objects
	// 4.	Create a Car class with the following:
        // brand
        // speed
        // a drive method that prints the car brand and speed
            // class Car{
            //     constructor(brand, speed){
            //         this.brand = brand;
            //         this.speed = speed;
            //     }
            //     drive(){
            //         console.log(this.brand + "->" + this.speed + "kmph");
            //     }
            // }

            // let car1 = new Car("Hyundai", 160);
            // let car2 = new Car("Tata", 130);
            // let car3 = new Car("Ferrari", 220);
            // car1.drive()
            // car2.drive()
            // car3.drive()


	// 5.	Create two different car objects from the same class and verify that their data is different.
            // class Car{
            //     constructor(brand, speed){
            //         this.brand = brand;
            //         this.speed = speed;
            //     }
            //     drive(){
            //         console.log(this.brand + "->" + this.speed + "kmph");
            //     }
            // }

            // let car1 = new Car("Hyundai", 160);
            // let car2 = new Car("Tata", 130);

            // console.log(car1.brand === car2.brand);
            // console.log(car1.speed === car2.speed);
            
	// 6.	Answer this in your own words:
    //     If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?
            // If classes did not exist, we would need to create objects separately for each car. In large projects, this leads to repeated code, poor maintainability, and cluttered structure, making the application hard to manage and scale.

// ⸻

// SECTION 3: Constructor and this keyword
	// 7.	Create a Student class whose constructor accepts name and roll number. Add a method introduce that prints both values.
            // class Student{
            //     constructor(name, roll_no){
            //         this.name = name;
            //         this.roll_number = roll_no;
            //     }
            //     info(){
            //         console.log(this.name +" -> "+ this.roll_number);
            //     }
            // }

            // let st = new Student("Mahesh", 46)
            // st.info()

	// 8.	Inside the constructor, set values using this. Then try removing this and notice what error occurs and why.
            // class Student{
            //     constructor(name, roll_no){
            //         this.name = name;
            //         this.roll_number = roll_no;
            //     }
            //     info(){
            //         console.log(name +" -> "+ roll_number);
            //     }
            // }

            // let st = new Student("Mahesh", 46)
            // st.info()

	// 9.	Create an object with two methods:
    //     One method using a normal function
    //     One method using an arrow function
    // Inside both, print this and observe the difference.
            // let obj = {
            //     normalfun : function(){
            //         console.log(this);
            //     },

            //     arrowfun : ()=>{
            //         console.log(this);
            //     }
            // }

            // obj.arrowfun();//this in arrow function returns window
            // obj.normalfun();//this in normal function return obj itself

// The goal is to clearly understand how this works and when it changes.

// ⸻

// SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).
            
// 	11.	Add a login method in two ways:
//      First, inside the constructor
//      Then, move the method to the prototype
            
// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.
//             The purpose here is to understand how prototypes help share behavior efficiently.

// ⸻

// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.

// 	14.	Create an object that contains a name property.
        // Use call to run the function using the object
        // Use apply to run the function using the object
        // Use bind to create a new function and then call it

	// 15.	Borrow a method from one object and run it for another object using call.
            // The goal is to understand how this can be manually controlled.