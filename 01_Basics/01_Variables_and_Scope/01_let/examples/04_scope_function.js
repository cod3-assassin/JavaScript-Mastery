function greet() {
    let greeting = "Hi!";
    console.log(greeting); // ✅ Output: Hi!
}

greet();


function blockScope() {
    let number = 20;

    if (number === 20) {
        let name = 'Wasim';

        console.log(number)
        console.log(name)
    }
    console.log(number)
    console.log(name)

}

blockScope()

console.log(number)
console.log(name)



console.log(greeting); // ❌ ReferenceError: greeting is not defined
