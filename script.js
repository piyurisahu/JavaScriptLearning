// /**
//  *  e-15
//  */
//
// var b = document.querySelectorAll('.btn');
// console.log(b);
//
// for(var i=0;i<b.length;i++)
// {
//     b[i].addEventListener('click',fun);
// }
// function fun() {
//     this.style.backgroundColor= 'pink';
// }
//


/**
 * e -16
 */

var myEle = document.createElement("HI");
var myContent = document.createTextNode("new ELement");
var output = document.getElementById("output");

myEle.appendChild(myContent);
output.appendChild(myEle);

var a = document.getElementById('wrapper').children;
console.log(a);

// var myOutput = document.getElementById('output');
// console.log(myOutput);
//
// console.dir(myOutput)
// myOutput.innerHTML = "NEW CONTACT";
// myOutput.style.color = 'blue';
//
// /**
//  *
//  * @type e-14
//  */
// var btn2= document.getElementById('btn2');
// var myOutput= document.getElementById('output');
//
// btn2.addEventListener('click', myFun);
// // btn2.onclick = myFun;
//
// function myFun() {
//     myOutput.innerHTML = 'Hi it is changed';
//     myOutput.style.backgroundColor = 'green';
//
// }
//
// var myBtn = document.getElementsByClassName('btn');
// console.dir(myBtn);
//
// myBtn[0].innerHTML = "fhghgh"
//
// document.getElementById('btn1').addEventListener('click',
//     function () {
//         this.style.background = 'blue'
//         alert('hi you perfromed some event');
//     })