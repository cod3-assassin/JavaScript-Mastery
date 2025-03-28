let x = 100;

function test() {
    let x = 50; // Shadows the global x
    console.log(x); // ✅ Output: 50
}

test();
console.log(x); // ✅ Output: 100


let name = "Global Wasim";

function outer() {
    let name = "Outer Wasim"; // Shadows global 'name'

    function inner() {
        let name = "Inner Wasim"; // Shadows outer 'name'
        console.log(name); // Output: "Inner Wasim"
    }

    inner();
    console.log(name); // Output: "Outer Wasim"
}

outer();
console.log(name); // Output: "Global Wasim"




let i = "Global i";

for (let i = 0; i < 3; i++) {
    console.log(i); // Output: 0, 1, 2
}

console.log(i); // Output: "Global i"



