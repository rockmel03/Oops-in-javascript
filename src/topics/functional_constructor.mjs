function Person(name, age) {
  this.name = name;
  this.age = age;

  this.describe = () => {
    return `this is ${this.name} and ${this.age} years old`;
  };
}

const person1 = new Person("kamal", 23);
const person2 = new Person("nitin", 19);

// console.log(person1.describe());
// console.log(person2.describe());

function Animal(spicies) {
  this.spicies = spicies;
  this.describe = () => {
    return `this animal is a ${this.spicies}`;
  };
}

// adding prototype to a constructor function
Animal.prototype.sound = function () {
  return `this is sound of a ${this.spicies}`;
};

const dog = new Animal("Dog");

// console.log(dog.sound())

function Drink(type) {
  if (!new.target) {
    throw new Error("type must be define");
  }

  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}

const tea = new Drink("tea");
const coffee = new Drink("coffee");

// console.log(tea.describe());
// console.log(coffee.describe());

// it gives error because not envoked with 'new' keyword
// const redWine = Drink("red wine");
