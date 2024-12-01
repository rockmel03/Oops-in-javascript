//method overriding
class Bird {
  fly() {
    return "flying...";
  }
}

class Penguin extends Bird {
  constructor() {
    super();
    this.colors = ["black", "white"];
  }
  //method overriding
  fly() {
    return "Penguines can't fly";
  }
}

class Crow extends Bird {
  constructor() {
    super();
    this.colors = ["black"];
  }
}

const crow = new Crow();
const penguin = new Penguin();

console.log(crow.fly());
console.log(penguin.fly());
