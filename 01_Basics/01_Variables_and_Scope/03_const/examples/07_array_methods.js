const numbers = [10, 20, 30];
numbers.pop(); // Allowed
numbers.unshift(5); // Allowed
console.log(numbers); // [5, 10, 20]

const names = ["Skipper", "Bot", "Jack", "Riko"];

names.pop();
console.log(names);

names.unshift("Kwolski");

console.log(names);
