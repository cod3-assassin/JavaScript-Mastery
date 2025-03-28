# **Understanding `let` in JavaScript**

## **Introduction**
The `let` keyword in JavaScript is used to declare variables with **block scope**. Unlike `var`, `let` does **not allow redeclaration** and is not hoisted in the same way.

## **Key Features of `let`**
- **Block Scope:** A `let` variable is only accessible within the `{}` block where it is declared.
- **No Redeclaration:** You cannot declare the same variable twice in the same scope using `let`.
- **Hoisting with Temporal Dead Zone (TDZ):** Unlike `var`, `let` is hoisted but cannot be accessed before declaration.

## **Example Usage**
```js
let name = "Wasim";
console.log(name); // ✅ Output: "Wasim"

// Block Scope Example
{
    let age = 25;
    console.log(age); // ✅ Output: 25
}
console.log(age); // ❌ ReferenceError: age is not defined

// No Redeclaration
let city = "Delhi";
let city = "Mumbai"; // ❌ SyntaxError: Identifier 'city' has already been declared
