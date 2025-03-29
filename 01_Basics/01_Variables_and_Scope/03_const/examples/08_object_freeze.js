const obj = Object.freeze({ value: 100 });
// obj.value = 200; // Silent failure (or error in strict mode)
console.log(obj.value); // 100

const person = Object.freeze({
  name: "John",
  details: { age: 30 },
});

person.details.age = 40; // ✅ This still works (shallow freeze)
console.log(person.details.age); // 40

function deepFreeze(obj) {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]); // Recursively freeze nested objects
    }
  });
  return Object.freeze(obj);
}

const person2 = deepFreeze({
  name: "John",
  details: { age: 30 },
});

person2.details.age = 40; // ❌ TypeError in strict mode (now truly immutable)

console.log(person2.details.age); // 40
