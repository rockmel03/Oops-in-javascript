import "./styles.css";

// topics import
// import "./topics/prototypes.mjs";
// import "./topics/functional_constructor";
// import "./topics/class_objects_and_inheritance.mjs";
// import "./topics/encapsulation.mjs/"
// import "./topics/abstraction.mjs";
import "./topics/polymorphism.mjs";

console.log("hellow world");

let human = {
  canFly: false,
  canWalk: true,
  hands: 2,
  legs: 3,
  livesOn: "land",
};

let person = {
  name: "kamal",
  age: 23,
  __proto__: human,
};

let car = {
  tayers: 4,
};

let tesla = {
  brand: "tesla",
  model: "cybertruck",
};

Object.setPrototypeOf(tesla, car);
// console.log(Object.getPrototypeOf(tesla));

function Drink(type) {
  if (!new.target) {
    throw new Error("type of Drink must be define");
  }

  this.type = type;

  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}

Drink.prototype.make = function () {
  return `Preparing a cup of ${this.type}.`;
};

const tea = new Drink("tea");

// console.log(tea.describe());
// console.log(tea.make());
