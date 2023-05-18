class Product {
  constructor(name) {
    this._name = name;
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name.toUpperCase();
  }
}

exports.Product = new Product("mic");
