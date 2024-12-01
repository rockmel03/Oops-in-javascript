class Human {
  constructor() {
    this.canEat = true;
    this.canFly = false;
    this.canWalk = true;
  }
}

class Gender extends Human {
  constructor(gender) {
    let genders = ["male", "female", "other"];
    if (!gender) throw new Error("gender must be define");
    if (typeof gender !== "string")
      throw new Error("typeof gender must be 'string'");
    if (!genders.includes(gender))
      throw new Error("gender should be 'male' or 'female' or 'other'.");

    super();
    this.gender = gender;
  }
}

Gender.prototype.sayGender = function () {
  return `it is a ${this.gender}`;
};

class Employee extends Gender {
  constructor(name, age, gender) {
    super(gender);
    this.name = name;
    this.age = age;
  }
}

const employee1 = new Employee("kamal", 23, "male");

console.log(employee1);
