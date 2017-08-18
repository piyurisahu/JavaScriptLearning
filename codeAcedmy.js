/*
asynchronous
 Philip Roberts: What the heck is the event loop anyway? | JSConf EU
 */

console.log("hi");

setTimeout(function () {
    console.log("hi will be invoked after 5 min");
},5000);

console.log("Piyuri");