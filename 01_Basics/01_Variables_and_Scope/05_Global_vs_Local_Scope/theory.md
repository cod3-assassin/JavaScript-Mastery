# Global vs. Local Scope

## Introduction
Scope in JavaScript defines the accessibility of variables. The two main types of scope are:
- **Global Scope**: Variables declared outside any function or block are available throughout the script.
- **Local Scope**: Variables declared inside a function or block are only accessible within that scope.

Understanding scope is crucial for avoiding unintended variable modifications and improving code maintainability.

---

## 1. Global Scope
A variable has **global scope** when it is declared outside of any function. Global variables are accessible from anywhere in the code.

### Example:
```javascript
var globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // Accessible inside the function
}

showGlobal(); // Output: "I am global"
console.log(globalVar); // Output: "I am global"
```

### Characteristics of Global Scope:
- Accessible from anywhere in the script.
- Can be modified from any function, which might lead to **unexpected side effects**.
- In the browser, global variables declared with `var` become properties of the `window` object.

---

## 2. Local Scope
A variable has **local scope** when it is declared inside a function. It is only accessible within that function.

### Example:
```javascript
function localScopeExample() {
  var localVar = "I am local";
  console.log(localVar); // Output: "I am local"
}

localScopeExample();
console.log(localVar); // ReferenceError: localVar is not defined
```

### Characteristics of Local Scope:
- Cannot be accessed outside the function.
- Helps prevent **variable name conflicts** and **unintended modifications**.

---

## 3. Function Scope vs. Block Scope
### Function Scope (Using `var`)
Variables declared with `var` are **function-scoped**, meaning they are accessible throughout the function in which they are declared.

```javascript
function functionScopeExample() {
  if (true) {
    var functionScoped = "Accessible throughout function";
  }
  console.log(functionScoped); // Output: "Accessible throughout function"
}

functionScopeExample();
```

### Block Scope (Using `let` and `const`)
Variables declared with `let` and `const` are **block-scoped**, meaning they are accessible only inside the block `{}` where they are declared.

```javascript
function blockScopeExample() {
  if (true) {
    let blockScoped = "Only accessible within this block";
    console.log(blockScoped); // Output: "Only accessible within this block"
  }
  console.log(blockScoped); // ReferenceError: blockScoped is not defined
}

blockScopeExample();
```

---

## 4. Variable Shadowing
Variable **shadowing** occurs when a local variable has the same name as a global variable, preventing access to the global variable within that scope.

```javascript
var message = "Global message";

function shadowExample() {
  var message = "Local message"; // Shadows the global variable
  console.log(message); // Output: "Local message"
}

shadowExample();
console.log(message); // Output: "Global message"
```

### Important Notes:
- The global variable remains unaffected outside the function.
- Always use unique variable names to avoid confusion.

---

## 5. Implicit Global Variables
If a variable is **assigned a value without being declared**, it becomes **implicitly global**, even if it’s inside a function.

```javascript
function implicitGlobal() {
  undeclaredVar = "I am an implicit global";
}

implicitGlobal();
console.log(undeclaredVar); // Output: "I am an implicit global"
```

### Why Avoid Implicit Globals?
- Can lead to **unintended modifications** of global state.
- Hard to debug and maintain.
- Use `'use strict';` to prevent accidental global variables.

```javascript
'use strict';
function strictModeExample() {
  undeclaredVar = "This will throw an error";
}

strictModeExample(); // ReferenceError: undeclaredVar is not defined
```

---

## Conclusion
- **Global variables** are accessible everywhere but can lead to **unintended side effects**.
- **Local variables** are safer as they are only accessible within their scope.
- **Function scope** applies to `var`, while **block scope** applies to `let` and `const`.
- **Avoid implicit globals** to prevent unpredictable behavior.
- Use `'use strict';` to enforce better scoping practices.

Understanding scope will help you write **cleaner, safer, and more efficient JavaScript code**.
