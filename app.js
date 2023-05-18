// const { add } = require("Math");
// const { substract } = require("./math");
// const { Product } = require("./product");

// const product = new Product("Mug");

// console.log("Product name =>", product.name);

// console.log(add(3, 4, 4));
// console.log(substract(4, 3));

// const prod1 = require("./product").Product;

// prod1.name = "mug";
// console.log(prod1.name);

// const prod2 = require("./product").Product;

// console.log(prod2.name);

// const { getname } = require("./pattern2");

// getname();

const Person = require("./person");

const p1 = new Person("fistname");

p1.name = "new name";
console.log(p1.name);

const p2 = new Person("lastname");

console.log(p2.name);
