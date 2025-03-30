function expressionHoist() {
  console.log("Calling function before assignment:");

  try {
    myFunction(); // ❌ This will cause a TypeError
  } catch (e) {
    console.log("Error:", e.message);
  }

  var myFunction = function () {
    console.log("Function expression executed!");
  };

  console.log("Calling function after assignment:");
  myFunction(); // ✅ This will work fine
}

expressionHoist();
