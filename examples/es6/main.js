class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello I am " + this.name);
  }

  sayGoodbye(firstname) {
    console.log("See you..." + firstname);
  }
}

class Employee extends Person {
  constructor(name, age, salary, company) {
    super(name, age);
    this.salary = salary;
    this.company = company;
  }

  raise(percentage) {
    this.salary *= 1 + percentage;
  }

  sayHello() {
    console.log("Hello I am " + this.name + " and I work for " + this.company);
  }
}

const alice = new Person("Alice", 13);
console.log("alice: ", alice);
alice.sayHello();

const charly = new Employee("Charly", 32, 2000, "Acme");
console.log("charly: ", JSON.stringify(charly));
charly.raise(0.01);
console.log("charly: ", JSON.stringify(charly));
