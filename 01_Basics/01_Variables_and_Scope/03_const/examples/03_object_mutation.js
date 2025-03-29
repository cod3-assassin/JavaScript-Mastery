const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed: mutating properties
console.log(obj); // { name: "Bob" }
// obj = { name: "Charlie" }; // TypeError

const obj2 = { age: 12 };

obj2.age = 25;
console.log(obj2);
