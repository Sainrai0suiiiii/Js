// functions are reusable block of code design to perform specific task
// Parameters are place holders define in the function while arguments are the actual values you pass


function greet(name){
    console.log("hello " + name);
}
greet("Sain");

// name is the placeholder inside the function where argument sain is the real value

//default parameters are used when no argument is provided during the function call
function hello(call){
    console.log("hello" + call)
}
hello ();
hello(" baby");

// return statement
//used to send a result back from a function and when return statement execute the fucntions stops running at the point
//then the returned value can be stored in a variable or used directly
function add(a,b){
    return a + b;
}
let result = add(5,10);
console.log("this is the final result:", result);

function sub(c,d){
    return c-d;

}
let result1 = sub(50,24);
console.log("this is the substraction:", result1);

//types of function
//named function has its own name when declared and easy to reuse and debug
function sain(){
    return "HELLO !";
}
console.log(sain());

function rai(){
    return " KULUNG !";
}
console.log(rai());

//Anonymous function is defined without an explicit name and commonly used as a callback or assigned to a variable
const kulung = function(){
    return "hi king";
};
console.log(kulung());

//function Expression is created as part of an expression and assigned to a variable or passed to another function
const sum = function (c,d){
    return c+d;
};
console.log("The sum of number:",sum(4,5));

// arrow function are shorter and do not have their own this binding
const hero = n => n*n;
console.log("hero number:",hero(3));

//immediately invoked function expression (IIfe) are executed immediately after their definition and often used to create isolated scopes
(function(){
    console.log("this run immediately!");
});

//callback function is passed as an argument to another function and is executed after the completion of that function 
function com( c, combo){
    return combo(c);
}
const boo = (c)=> c *2;
console.log(com(5,boo));

// constructor function is used t create multiple objects with the same structure with new keyword

function person(name,age,height){
    this.name = name;
    this.age = age;
    this.height = height;
}
const user = new person("Sahin",24,5);
console.log(user.name);
console.log(user.age);
console.log(user.height);

//async function handle asynchronous task and it is declared with async keyword
//they return a promise async and await
async function para() {
    return "Para fetched!!";
}
para().then(console.log);

// generator function can pause execution using yield keyword and resume later.
function* numbers(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = numbers();
console.log(gen.next().value);
console.log(gen.next().value);

//recursive function calls itself until it met its condition
function factorial(f){
    if (f===0) return 1;
    return f * factorial(f-1);
}
console.log(factorial(5));