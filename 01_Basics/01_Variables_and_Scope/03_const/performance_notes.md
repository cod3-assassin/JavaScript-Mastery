# Loops and Closures with `const`

## Introduction
The `const` keyword in JavaScript behaves uniquely in loops and closures due to its block-scoping and immutability. While `const` ensures that a variable binding cannot be reassigned, it does not make the data stored in objects or arrays immutable. This document explores how `const` interacts with loops, its behavior inside closures, and performance considerations.

---

## 1. `const` in Loops

### Basic Behavior
In a `for` loop, attempting to use `const` for the loop counter leads to an error because `const` prevents reassignment:

```javascript
for (const i = 0; i < 3; i++) {
  console.log(i); // TypeError: Assignment to constant variable.
}
```

### Block Scope and Iteration
Since `const` is block-scoped, it works inside a `for...of` or `for...in` loop where the variable is redeclared in each iteration:

```javascript
const numbers = [10, 20, 30];
for (const num of numbers) {
  console.log(num); // 10, 20, 30 (each iteration gets a new `const num` binding)
}
```

Similarly, `const` works fine in `forEach`, where each callback execution has its own scope:

```javascript
numbers.forEach(const num => {
  console.log(num); // 10, 20, 30
});
```

---

## 2. `const` and Closures

### Capturing `const` Variables in Closures
Since `const` ensures that a variable binding cannot change, it is useful in closures where values need to remain constant:

```javascript
function createCounter(start) {
  return function () {
    console.log(start); // Always prints the same `start` value
  };
}

const counter1 = createCounter(10);
counter1(); // 10
```

Unlike `let`, which creates a new variable per loop iteration, `const` variables captured in closures behave predictably:

```javascript
const functions = [];
for (const i of [1, 2, 3]) {
  functions.push(() => console.log(i));
}
functions[0](); // 1
functions[1](); // 2
functions[2](); // 3
```

Here, `i` gets a new binding for each iteration, ensuring closures capture independent values.

---

## 3. Performance Considerations

- **Memory Efficiency:** Since `const` ensures each iteration gets a new binding, it can slightly increase memory usage in large loops.
- **Predictable Behavior:** `const` prevents accidental reassignment, reducing potential bugs in closures and loops.
- **Optimization:** JavaScript engines optimize `const` variables well, especially in closures, since they remain unchanged.

---

## Conclusion
`const` behaves predictably in loops and closures due to its immutability and block scope. While it cannot be used for loop counters in traditional `for` loops, it works well in `for...of`, `for...in`, and functional loops like `forEach`. Its behavior in closures ensures stable variable values across iterations, making it useful for function factories and event handlers.
