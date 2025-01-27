let score = "33sbc";

// console.log(typeof score) 

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber)

// console.log(valueInNumber)



//  33 => 33
// null => 0
// "33abc" => type after number conversion will be number, but value is NaN
// undefined => NaN
// true => 1
// false => 0


// Boolean Conversion

let boolean = 24

let valueInBoolean = Boolean(boolean);

// console.log(valueInBoolean);

// 0 => false
// 1 => true
// "" => false
// "Divya" => true
// null => false
// undefined => false
// 23 => true


// String Conversion

let someNumber = undefined;

let stringNumber = String(someNumber)

console.log(typeof stringNumber)

// 33 => string 
// true, false => string
// null, undefined => string


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



