// -----Utility Logic-----

// -----Business Logic-----
function Pizza(size, toppings, price) {
  this.size = size
  this.toppings = toppings
}

Pizza.prototype.price = function (cost) {
  this["cost"] = cost
}
// -----User Interface Logic-----