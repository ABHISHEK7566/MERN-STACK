// function statements ----

// function bravo(){
//     let y = 30;
//     console.log(y);
//     return y + 5;
// }

// x = bravo();
// alert(x);

// function expressions ----

// let beta = function(){
//     let y = 10;
//     console.log(y);
//     return y + 5;

// }
// console.log(beta());

// let a = beta();
// console.log(a);

// console.log(typeof beta);


// function expressions with arguments ----

// let beta1 = function(a,b){
//     let t = a + b;
//     console.log(t);
//     return t + 10;
// }

// let r = beta1(10,20);
// console.log(r);


// Arrow function ----

// let dog = () => console.log("arrow");
// dog();


// Arrow functions without arguments ----

// let cat = () => "arrow 2";
// console.log(cat());

// let bird = (x , y) => x + y;
// let v = bird(10,50);
// alert(v);

// single line arrow functions ----

// let square = n => n*n;
// console.log(square(8));

// let age = prompt("enter your age");
// let welcome = (age > 18) ? () => alert("HELLO")   : () => alert("BYE");
// welcome();

// console.log(typeof welcome);

//multi line arrow function ----

let blue = () => {
    let r = 10;
    console.log(r);
    return r*2;
}
console.log(blue());