// Declaration of a Function

function Indore(){
    alert("Hello from Indore Function");
}

// Calling of a function

Indore();


function goa(a){
    console.log("Hello "+ a);
}
 goa("Abhishek");

 // event function

 function getName(){
     var x = document.getElementById('userinput').value;
     document.getElementById('one').innerHTML = x;
 }

 // on change event 

 function cap(){
     var y = document.getElementById('capital').value;
     var c = y.toUpperCase();

     document.getElementById('capital').value = c;

 }