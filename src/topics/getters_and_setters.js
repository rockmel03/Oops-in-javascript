class Employee {
  #salary; // private veriable
  constructor(name, salary) {
    if (salary < 0) throw new Error("Invalid salary");
    this.name = name;
    this.#salary = salary;
  }

  //getter method for salary
  get salary() {
    return "you are not allowed to see salary!";
  }

  // setter method for salary
  set salary(amount) {
    if (amount < 0) throw new Error("Invalid salary");
    this.#salary = amount;
  }
}

const emp1 = new Employee("Jhone Doe", 50000);

// we can access that getter method for salary
console.log(emp1.salary);

//we can use that setter method we created for setting salary
// emp1.salary = -40000; //throws error
emp1.salary = 40000;

