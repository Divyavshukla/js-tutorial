//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "divyagirl@gmail.com";

let anothername = myYoutubename; // here the copy is used
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: 'user@google.com', // this will also update
    upi: "user@ybl",
}

let userTwo = userOne; // reference

console.log(userTwo);

userTwo.email = "abc@gmail.com";



// In stack primitive value are stored and in heap non-primitive value are stored 

// Stack:
// ----

// Think of it like a stack of plates: You can only add or remove the top plate.
// Used for: Temporary storage, like function calls and local variables.
// Automatic: Memory is automatically allocated when a function starts and freed when it ends.
// Fast: Accessing data is quick because it’s organized neatly.
// Limited size: If you use too much (like too many plates), it can overflow.


// Heap:
// ----

// Think of it like a messy room: You can put things anywhere and take them out whenever you want.
// Used for: Long-term storage, like objects and data that need to stick around.
// Manual: You have to remember to clean up (free the memory) when you’re done.
// Slower: Accessing data can be slower because it’s not organized.
// Larger size: You can use more memory, but you need to manage it carefully.
// In short, the stack is fast and automatic but limited, while the heap is flexible and larger but requires more management.