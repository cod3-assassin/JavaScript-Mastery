console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 5;




let z = "Outer";
if (true) {
    console.log(z); // ReferenceError: Cannot access 'z' before initialization
    let z = "Inner"; // Shadows the outer z
}
console.log(z); // Output: "Outer" (if the error didn’t stop execution)



//TDZ in function 
function test() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = "Hello";
}
test();