/*
constructor
 */

function User(name) {

    if(!new.target)
    {
        console.log("inside user")
        new User(name);
    }
    this.name=name;

}

let firstUser= new User("piyuir");
console.log(firstUser.name);
let secondUser=User("sahu");
 console.log(secondUser.name);