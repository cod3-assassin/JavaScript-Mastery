let num = 100;

function testScope() {
    let num = 50;  // ❌ Fix this to avoid shadowing issue
    return num;
}

console.log(testScope()); // Expected Output: 50
console.log(num);         // Expected Output: 100
