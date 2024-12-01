class CoffeeMachine {
  start() {
    // complex opration
    return "Machine is starting....";
  }

  brewCoffee() {
    // complex claculation
    return "Brewing coffee...";
  }

  pressStartButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffee();

    return `${msg1}\n${msg2}`;
  }
}

const myCoffeeMachine = new CoffeeMachine();

console.log(myCoffeeMachine.pressStartButton());
