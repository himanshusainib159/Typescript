// explicit types
let character: string;
let age: number;
age = 30;
// age = 'fdls'

// arrays
let ninjas: string;
[];
// ninjas.push("s");

// unions
let mixed: (string | number)[] = [];
mixed.push("hello");
mixed.push(34);
// mixed.push(true)
console.log(mixed);

// objects

let uid: string | number;

let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };

let ninjaTwo: {
  name: string;
  age: number;
};

ninjaTwo = { name: "luigi", age: 77 };
