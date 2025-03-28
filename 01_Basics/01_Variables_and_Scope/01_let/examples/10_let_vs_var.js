// var is function-scoped
if (true) {
    var a = 10;
}
console.log(a); // ✅ Output: 10 (accessible outside)

// let is block-scoped
if (true) {
    let b = 20;
}
console.log(b); // ❌ ReferenceError: b is not defined
