# Hoisting in JavaScript

## Introduction
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that variables and functions can be referenced before their actual declaration in the code. Understanding hoisting is crucial to avoid unexpected behavior in JavaScript execution.

## How Hoisting Works
During the compilation phase, the JavaScript engine scans for variable and function declarations before executing the code. These declarations are stored in memory before the execution begins, making them available in their respective scopes.

### 1. **Function Hoisting**
Function declarations are hoisted entirely, meaning they can be called before they appear in the code.

#### Example:
```javascript
sayHello(); // Outputs: "Hello!"

function sayHello() {
    console.log("Hello!");
}
```
**Explanation:** The function `sayHello` is hoisted to the top, so calling it before its declaration works without errors.

However, function expressions (including arrow functions) are not hoisted the same way.

```javascript
hello(); // TypeError: hello is not a function

const hello = function() {
    console.log("Hi!");
};
```
**Explanation:** The variable `hello` is hoisted, but its assignment is not. The engine treats it as an uninitialized variable during execution.

### 2. **Variable Hoisting**
#### **Hoisting with `var`**
Variables declared with `var` are hoisted but initialized with `undefined`.

```javascript
console.log(a); // undefined
var a = 10;
console.log(a); // 10
```
**Explanation:** The declaration `var a` is hoisted, but the assignment `a = 10` remains in place. Hence, `a` exists but holds `undefined` until the assignment executes.

#### **Hoisting with `let` and `const`**
Unlike `var`, variables declared with `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until their declaration is encountered.

```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
```
**Explanation:** `b` is hoisted but remains uninitialized in the TDZ, preventing access before its declaration.

```javascript
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
```
`const` behaves similarly to `let`, but it also requires an immediate assignment.

### 3. **Class Hoisting**
Classes in JavaScript are not hoisted like functions. They also remain in the **Temporal Dead Zone** (TDZ) until their declaration is encountered.

```javascript
const obj = new Person(); // ReferenceError: Cannot access 'Person' before initialization

class Person {
    constructor(name) {
        this.name = name;
    }
}
```
**Explanation:** Class `Person` is hoisted but cannot be accessed before its declaration.

## Summary of Hoisting Behavior
| Feature | Hoisted? | Initialized? | Usable before declaration? |
|---------|---------|--------------|----------------------------|
| Function Declarations | Yes | Yes | Yes |
| Function Expressions (`var`) | Yes | No | No (undefined) |
| Function Expressions (`let`/`const`) | Yes | No | No (TDZ) |
| `var` Variables | Yes | Undefined | Yes (but `undefined`) |
| `let` Variables | Yes | No (TDZ) | No (ReferenceError) |
| `const` Variables | Yes | No (TDZ) | No (ReferenceError) |
| Classes | Yes | No (TDZ) | No (ReferenceError) |

## Conclusion
Hoisting affects how JavaScript interprets code before execution. While function declarations can be used before their definition, variables declared with `var` get hoisted with `undefined`, and `let`, `const`, and class declarations remain inaccessible until their initialization. Understanding hoisting helps prevent common pitfalls and write cleaner, more predictable JavaScript code.
