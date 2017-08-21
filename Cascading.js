/**
 * Created by piyurisahu on 21/08/17.
 */
var string = 'string cheese';

console.log(string.split('').reverse().join());


function number(value) {
    this.value=value;
    this.plus=function (sum) {
        this.value+=sum;
        return this;
    }
     this.return=function () {
        return this.value;

     }
    return this;
}

number.prototype.minus=function (minus) {
    this.value-=minus;
    return this;
}

console.log(new number(5).plus(3).minus(3).return());