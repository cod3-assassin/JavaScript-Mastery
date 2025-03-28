let globalVar = "I'm global"; // Global variable

function showGlobal() {
    console.log(globalVar); // ✅ Output: I'm global
}

showGlobal();
console.log(globalVar); // ✅ Output: I'm global
