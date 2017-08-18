var food={fruit: "apple"};
var more_food= {vegetable: "green peA"}

// food= Object.create(more_food);
console.log(food.fruit);
console.log(food.vegetable);


var other=Object.create(food,
    {
        vegetable: {
            value: "celery"
        }
    });
//
// +---------------------+  [[Prototype]]  +---------------+
// | more_food           |+--------------->| food          |
// |---------------------|                 |---------------|
// | vegetable: "celery" |                 | fruit: "apple |
// +---------------------+                 +---------------+
console.log(other.fruit);
console.log(other.vegetable);
console.log(other.hasOwnProperty('fruit'));
console.log(other.hasOwnProperty('vegetable'));
console.log('fruit' in other);
//
//
// A prototype is a normal object. When an object inherits a prototype, it does not just copy the properties of the prototype, the object stores a reference to the prototype.
//     You're right, the prototype of an object, is just another object referenced through the prototype chain.
//
// The difference between your two snippets is that with __proto__ you are mutating the prototype of food. In your second example, you are just assigning a new object that inherits from more_food, that's why food.fruit is resolved to undefined, because your original food object is lost by that assignment.
//
// What exactly is Object.create doing?
//     Object.create builds a new object that inherits from the object passed as its first argument (it can be only either an object or null).
//
// Is the variable food assigned the reference to the prototype more_food, or is Object.create just returning a copy of the object more_food?
//     Your food variable will hold a new object, which inherits from more_food, there's no any copying in this operation.
//
// For example:
//
//     var food = {fruit:"apple"};
// var more_food = Object.create(food, {
//     vegetable: { value: "celery" }
// });
//
// more_food.fruit;     // "apple"
// more_food.vegetable; // "celery"
// In the above example, more_food inherits from food, in other words, food is the prototype of more_food, this prototypical reference is stored in an internal property called [[Prototype]]. The second argument of Object.create allows you to initialize properties on this new object.
//
//     There's no copying, it's just plain delegation in the above example more_food.fruit is accesible through the prototype chain, the property lookup process is really simple, if a property is not found on an object, it's looked up again (delegation!) on the object's prototype, recursively, until an object whose prototype is null is found (like Object.prototype).
//
// So, more_food.fruit is an inherited property:
//
//     more_food.hasOwnProperty('fruit'); // false, inherited
// 'fruit' in more_food;              // true
// While vegetable is an own property of more_food:
//
//     more_food.hasOwnProperty('vegetable'); // true
// The above example looks graphically like this:
//
//
// +---------------------+  [[Prototype]]  +---------------+
// | more_food           |+--------------->| food          |
// |---------------------|                 |---------------|
// | vegetable: "celery" |                 | fruit: "apple |
// +---------------------+                 +---------------+
//     If Object.create is just making a copy, then how does the prototype chain work if the variable food has no reference to more_food?
//     Object.create doesn't create copies of objects, it just sets up the prototype of a new object at the time of its creation.
//
// Keep in mind that __proto__ is a non-standard feature and it's going to be removed from implementations in the future, is already being listed as deprecated on the Mozilla Documentation, the main reason of this, and it's also why the language may never have a way to mutate the prototype chain in the way __proto__ allows you is that it causes optimization and security problems, at the level of VM and JIT.