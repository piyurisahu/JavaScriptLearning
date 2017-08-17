/*
 closuregit init
 */
function showName(firstName) {
    var introName = "pihu";
    return introName;

    function fullName(lastName) {

        console.log(introName+"  "+lastName+"  "+firstName);
    }
    return fullName();
}

showName("piyuri","sahu");

//It is access to outer functions variables even if outer function retures something.

var x=showName("Anusha");

    x("sahu");


/*
 hoisting variables
 */
// (function () {
//     var a = 1;
//     console.log(a + " " + b + " " + c);
//     var b = 2;
//
//
// })();

/*
 hoisting function
 */



var foo = function () {
    console.log("function hoisting");
    
}
foo();

// var myvar;
//
// console.log("hello");
// function myFunction()
// {
//     setInterval(printFunction,3000);
//
// }
//
// function printFunction() {
//     console.log("Hello!\n");
// }
//
// myFunction();