function Person(name, age) {
  "use strict";
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log("Hello I am " + this.name);
};

// Person("Bob", 23);

var alice = new Person("Alice", 13);
console.log("alice: ", alice);
alice.sayHello();

var bob = {};
Object.setPrototypeOf(bob, Person.prototype);
Person.bind(bob)("Bob", 18);

console.log("bob: ", bob);

function Employee(name, age, salary, company) {
  Person.bind(this)(name, age);
  this.salary = salary;
  this.company = company;
}

Employee.prototype.raise = function (percentage) {
  this.salary *= 1 + percentage;
};

Employee.prototype.sayHello = function () {
  console.log("Hello I am " + this.name + " and I work for " + this.company);
};

Object.setPrototypeOf(Employee.prototype, Person.prototype);

const charly = new Employee("Charly", 32, 2000, "Acme");
console.log("charly: ", JSON.stringify(charly));
charly.raise(0.01);
console.log("charly: ", JSON.stringify(charly));
