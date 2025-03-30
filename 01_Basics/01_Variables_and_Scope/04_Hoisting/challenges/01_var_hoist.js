function hoistVar() {
  console.log(hoist); // undefined

  var hoist = "Hoisting concept";

  console.log(hoist); // "Hoisting concept"
}

hoistVar();
