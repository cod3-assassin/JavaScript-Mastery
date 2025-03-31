# Use Cases of Global vs. Local Scope in JavaScript

## 1. When to Use Global Variables

### ✅ Use Case: Configuration Settings
Global variables are useful when storing settings that need to be accessed throughout the application.

```javascript
var API_URL = "https://api.example.com";

function fetchData(endpoint) {
    console.log(`Fetching from ${API_URL}/${endpoint}`);
}

fetchData("users"); // Fetching from https://api.example.com/users
```

### ✅ Use Case: Shared Counters
When multiple functions need access to the same variable, global scope can be useful.

```javascript
var counter = 0;

function increment() {
    counter++;
}

function logCounter() {
    console.log(`Current counter: ${counter}`);
}

increment();
increment();
logCounter(); // Current counter: 2
```

## 2. When to Use Local Variables

### ✅ Use Case: Encapsulation & Avoiding Conflicts
Local variables help prevent accidental modification of variables in other parts of the code.

```javascript
function processUser() {
    var userId = 101; // Local scope
    console.log(`Processing user with ID: ${userId}`);
}

processUser();
// console.log(userId); // ❌ ReferenceError: userId is not defined
```

### ✅ Use Case: Avoiding Global Pollution
Using local variables inside functions avoids unnecessary global variables, reducing the risk of conflicts.

```javascript
function calculateSum(a, b) {
    var sum = a + b;
    return sum;
}

console.log(calculateSum(3, 7)); // 10
// console.log(sum); // ❌ ReferenceError: sum is not defined
```

## 3. Combining Global and Local Scope

### ✅ Use Case: Controlled Access to Global Variables
You can use global variables while keeping certain calculations or operations within local scope.

```javascript
var discountRate = 0.1; // Global variable

function applyDiscount(price) {
    var discount = price * discountRate; // Local variable
    return price - discount;
}

console.log(applyDiscount(100)); // 90
```

## Optimization Techniques

### 🚀 Best Practice: Minimize Global Variables
**Problem:** Excessive global variables lead to naming conflicts and accidental modifications.

✅ **Solution:** Use local variables whenever possible, and limit global variables to essential configurations.

```javascript
// ❌ Bad Practice
var name = "John";
var age = 30;

function printUser() {
    console.log(`${name}, ${age} years old`);
}

printUser();

// ✅ Good Practice
function createUser(name, age) {
    console.log(`${name}, ${age} years old`);
}

createUser("John", 30);
```

### 🚀 Best Practice: Use Closures for Encapsulation
Closures help keep variables private while still making them accessible through specific functions.

```javascript
function counter() {
    var count = 0;
    return {
        increment: function () { count++; },
        getCount: function () { return count; }
    };
}

var myCounter = counter();
myCounter.increment();
console.log(myCounter.getCount()); // 1
```

---

By following these best practices and use cases, you can effectively manage variable scope in JavaScript, improving code maintainability and reducing errors. 🚀
