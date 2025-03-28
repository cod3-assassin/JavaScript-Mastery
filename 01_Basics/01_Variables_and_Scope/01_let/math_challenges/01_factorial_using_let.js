function factorialUsingLet(number) {

    let result = 1;

    for (let i = 1; i <= number; i++) {
        result = result * i
    }
    console.log(result)
}

factorialUsingLet(4)


function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
}
console.log(factorial(4))

// for (let i = 1; i <= 5; i++) {
//     let stars = ""; // Reset string for each row
//     for (let j = 1; j <= i; j++) {
//         stars += "*"; // Add a star to the string
//     }
//     console.log(stars); // Print the full row
// }

// for (let i = 5; i >= 1; i--) {
//     let stars = ""; // Reset string for each row
//     for (let j = 1; j <= i; j++) {
//         stars += "*"; // Add a star to the string
//     }
//     console.log(stars); // Print the full row
// }

// for (let i = 1; i <= 5; i++) {
//     let spaces = " ".repeat(5 - i); // Spaces decrease
//     let stars = "*".repeat(i);      // Stars increase
//     console.log(spaces + stars);
// }