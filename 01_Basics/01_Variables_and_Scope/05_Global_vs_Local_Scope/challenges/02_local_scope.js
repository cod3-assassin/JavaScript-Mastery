function localOnly() {
  var local = "I am local";
  console.log(local); // "I am local"
}

localOnly();

try {
  console.log(local); // Throws error
} catch (e) {
  console.log("Error:", e.message); // "Error: local is not defined"
}
