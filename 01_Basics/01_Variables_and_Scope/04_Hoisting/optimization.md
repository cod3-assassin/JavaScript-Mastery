# Common Mistakes with Hoisting in JavaScript

## Introduction
Hoisting in JavaScript is often misunderstood, leading to subtle bugs and unexpected behaviors. This document highlights common mistakes related to hoisting and provides best practices to avoid them.

---

## 1. Accessing Variables Before Declaration
### Mistake
Attempting to access a variable before it is declared leads to different behaviors depending on the keyword used (`var`, `let`, or `const`).

```javascript
console.log(a); // Undefined, due to var hoisting
var a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

### Why It Happens
- `var` is hoisted but initialized with `undefined`.
- `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until initialized.

### Solution
Always declare variables before using them to avoid confusion.

```javascript
var a = 10;
console.log(a); // 10

let b = 20;
console.log(b); // 20
```

---

## 2. Hoisting and Function Expressions
### Mistake
Using function expressions before declaration results in an error.

```javascript
console.log(myFunc()); // TypeError: myFunc is not a function

var myFunc = function () {
  return "Hello!";
};
```

### Why It Happens
- Function expressions are treated like normal variable assignments; only the variable (`myFunc`) is hoisted, not the function itself.

### Solution
Define function expressions before use or use function declarations instead.

```javascript
const myFunc = function () {
  return "Hello!";
};
console.log(myFunc()); // "Hello!"
```

Alternatively, use a function declaration:

```javascript
console.log(myFunc()); // "Hello!"

function myFunc() {
  return "Hello!";
}
```

---

## 3. Hoisting and Function Declarations in Blocks
### Mistake
Function declarations inside blocks behave inconsistently across JavaScript engines.

```javascript
if (true) {
  function greet() {
    return "Hello!";
  }
}

console.log(greet()); // May throw ReferenceError or work, depending on environment
```

### Why It Happens
- In **strict mode**, function declarations inside blocks are not hoisted to the global scope.
- In non-strict mode, some engines hoist them unpredictably.

### Solution
Use function expressions inside blocks for predictable behavior.

```javascript
if (true) {
  const greet = function () {
    return "Hello!";
  };
  console.log(greet()); // "Hello!"
}
```

---

## 4. Using `const` and `let` Without Initialization
### Mistake
Declaring `const` variables without initialization causes an error.

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
const x;
x = 50;
```

### Why It Happens
- `const` variables must be initialized at the time of declaration.

### Solution
Always initialize `const` variables during declaration.

```javascript
const x = 50;
console.log(x); // 50
```

---

## 5. Overwriting Hoisted `var` Variables
### Mistake
Redeclaring `var` variables later in the code can lead to confusion and unexpected overwrites.

```javascript
var name = "Alice";

function greet() {
  console.log(name); // undefined
  var name = "Bob";
  console.log(name); // "Bob"
}

greet();
```

### Why It Happens
- The `var name` inside the function is hoisted to the top of the function scope, making the outer `name` inaccessible within the function.

### Solution
Use `let` or `const` instead of `var` to prevent unintended shadowing.

```javascript
let name = "Alice";

function greet() {
  let name = "Bob";
  console.log(name); // "Bob"
}

greet();
console.log(name); // "Alice"
```

---

## Conclusion
Understanding hoisting prevents common mistakes that lead to runtime errors and unexpected results. Following best practices such as declaring variables before use, preferring `let` and `const` over `var`, and using function expressions in blocks ensures predictable and maintainable code.
