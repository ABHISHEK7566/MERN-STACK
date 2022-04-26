// Array

//let a = 10;
//let b = 20;

//collection of similar elements

// let a = [10,20,30,40,50];

// console.log(typeof a);
// console.log(a);

// console.log(a[0]);
// console.log(a[4]);


// a[9] = 100;
// console.log(a);


// let b = [
//     "orange",
//     true,
//     {name: "Abhishek"},
//     function(){alert("Hello from b");}

// ];
// console.log(b);

// console.log(b[2].name);
// console.log(b[3]);
// b[3]();


// Array methods
//push
// let f = ["orange","apple","mango"];
// f.push('banana');
// alert(f);
// console.log(f);


// //pop

// console.log(f.pop());
// console.log(f);
// f.pop();
// console.log(f);

//shift

// let feb = ["orange","apple","mango"];
// console.log(feb);
// feb.shift();
// console.log(feb);

// feb.unshift("mango");
// console.log(feb);

//for loop
//  let may = ["orange","apple","mango","banana"];

// for(let i=0; i < may.length; i++){
//     alert(may[i]);
// }

//for in loop

// for(let y in may){
// console.log(y);
// }

// for of loop
// for(let r of may){
//     console.log(r);

// }

// splice

let june = ["orange","apple","mango","banana"];

let x = june.splice(1,2);
console.log(x);
console.log(june);

june.splice(2,0,'cherry','chiku');

console.log(june);

