//  array 

const myArr = [1,2,3,4,5]

const myHeros = ['Skatiman', 'naagraj']

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr2[1])


// Array methdods

myArr.push(2)

myArr.pop()

myArr.unshift(30)

myArr.shift()

// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

const newArr = myArr.join();

// console.log(typeof newArr)      


// slice, splice


console.log('A', myArr);

const myn1 = myArr.slice(1, 3) 
console.log(myn1)


console.log('B', myArr)

const myn2 = myArr.splice(1,3);

console.log("C", myArr);

console.log(myn2)

// slice Returns a shallow copy (a new array) of a portion of an array.
// Does not modify the original array

// syntax : myArr.slice(start, end); // if end is omitted it will extend to the end of an array

// Splice() Add or remove elements from an array 
// Modify the original array

// syntax array.splice(start, deletecount, item1, item2, ....)

