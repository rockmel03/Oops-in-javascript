class Calculator {
  static add(a, b) {
    return a + b;
  }
}

const myCalc = new Calculator();
// console.log(myCalc.add(2, 3)); // it will throws an error

// methods created by "static" keyoword 
// only can be accesible by Class itself, nobody else can call it.
console.log(Calculator.add(2, 3));