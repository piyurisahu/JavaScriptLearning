var words=["piyiri","rashmi","neha","shruti","kem"];

var afterFilter=words.filter(function (x) {
    return x.length>4;
})
console.log(afterFilter);

//ES6
var filterInes6=words.filter(word=>word.length>5);
console.log(filterInes6);