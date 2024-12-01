let car = {
  tyers: 4,
  handle: 1,
  canProtectFrom: {
    sun: true,
    rain: true,
  },
};

let alto = {
  brand: "suzuki",
  driver: "manual",
  engine: "petrol",
  __proto__: car,
};

let tesla = {
  brand: "tesla",
  driver: "AI",
  engine: "electric",
};

Object.setPrototypeOf(tesla, car);

// console.log("car alto", alto.__proto__)
console.log("car alto", Object.getPrototypeOf(alto));
console.log("car tesla", Object.getPrototypeOf(tesla));
