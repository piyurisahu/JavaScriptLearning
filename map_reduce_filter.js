var numbers = [1, 5, 10, 15, 20];

var multiplyBy2 = numbers.map(function (x, index, array) {
    return x * 2;

})

var squareRootOf2 = numbers.map(Math.sqrt);
console.log("When each element multiplied by 2 : " + multiplyBy2);
console.log("square roor of each element : " + squareRootOf2);


// var kvArray=[{key:1,"age":24},{"name":"palak","age":26}];

var kvArray = [{key: 1, value: 24}, {key: 2, value: 26}];
add
var reformatted = kvArray.map(function (x) {
    var objArray = {};
    objArray[x.key] = x.value;
    return objArray;

})

console.log(reformatted);

var map=Array.prototype.map;
var a=map.call("Hello world", function (x) {
    return x.charCodeAt(0);
})

console.log("AsCII code of hellp world char  "+ a);