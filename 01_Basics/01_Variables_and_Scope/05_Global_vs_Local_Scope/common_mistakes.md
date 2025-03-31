# Common Mistakes in Global vs. Local Scope

Understanding the distinction between global and local scope is crucial in JavaScript. Misusing these scopes can lead to bugs that are often hard to debug. Below are some common mistakes and how to avoid them.

---

## 1. Using Global Variables Unnecessarily

### Mistake
Declaring variables in the global scope when they are only needed locally.

```javascript
var counter = 0;

function increment() {
  counter += 1; // Modifies global variable
}

increment();
console.log(counter); // 1
```

### Why It's a Problem
- Pollutes the global namespace.
- Increases the risk of unintended modifications by other parts of the code.

### Solution
Use local variables whenever possible.

```javascript
function increment() {
  let counter = 0;
  counter += 1;
  console.log(counter); // 1
}

increment();
```

---

## 2. Not Using `let` or `const`, Leading to Implicit Globals

### Mistake
Forgetting `var`, `let`, or `const` creates an implicit global variable.

```javascript
function setValue() {
  x = 10; // Implicitly global
}

setValue();
console.log(x); // 10 (Unexpected global variable)
```

### Why It's a Problem
- The variable `x` is now globally accessible, which can lead to conflicts.
- It can be accidentally modified elsewhere.

### Solution
Always declare variables with `let` or `const`.

```javascript
function setValue() {
  let x = 10; // Now local to the function
  console.log(x); // 10
}

setValue();
// console.log(x); // ReferenceError: x is not defined
```

---

## 3. Variable Shadowing Confusion

### Mistake
Using the same variable name in different scopes can cause confusion.

```javascript
var x = 5;

function test() {
  var x = 10;
  console.log(x); // 10 (local x shadows global x)
}

test();
console.log(x); // 5 (global x remains unchanged)
```

### Why It's a Problem
- It can be misleading and cause unexpected behavior.
- Developers may mistakenly think they are modifying the global variable.

### Solution
Use distinct variable names or `let` and `const` to manage scope properly.

```javascript
let globalX = 5;

function test() {
  let localX = 10;
  console.log(localX); // 10
}

test();
console.log(globalX); // 5
```

---

## 4. Modifying Global Variables Inside Functions

### Mistake
Altering a global variable inside a function without realizing it.

```javascript
var count = 0;

function increase() {
  count += 1; // Modifies the global count
}

increase();
console.log(count); // 1
```

### Why It's a Problem
- Functions should ideally not depend on global state to avoid side effects.
- Makes debugging harder if multiple functions modify the same global variable.

### Solution
Pass variables as parameters instead of modifying global state.

```javascript
function increase(count) {
  return count + 1;
}

let count = 0;
count = increase(count);
console.log(count); // 1
```

---

## 5. Unexpected Behavior in Loops Due to `var`

### Mistake
Using `var` inside loops can lead to unexpected behavior due to function-level scope.

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Expected: 0, 1, 2
// Actual: 3, 3, 3 (all closures reference the same variable)
```

### Solution
Use `let`, which has block scope.

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Correct output: 0, 1, 2
```

---

## Conclusion
Avoiding these common mistakes will help you write cleaner and more maintainable JavaScript code. Always be mindful of scope rules and use `let` or `const` to prevent unintended global variables. Understanding variable behavior in different scopes is essential for efficient and bug-free programming.
