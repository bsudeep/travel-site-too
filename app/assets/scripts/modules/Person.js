class Person {
  constructor(fullName, favColor) {
    this.fullName = fullName;
    this.favColor = favColor;
  }

  greet() {
    console.log(`Oh hello! My name is ${this.fullName} and my favourite colour is ${this.favColor}.`);
  }
}

export default Person;