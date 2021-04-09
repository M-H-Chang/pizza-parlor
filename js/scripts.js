// -----Utility Logic-----

// -----Business Logic-----
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.addPrice = function (cost) {
  return this.price = cost
}

Pizza.prototype.smallPrice = function () {
  this.price += 10;
  return this.price;
}

// function CalculatePrice(small, medium, large, topping) {
//   this.small = small
//   this.medium = medium
//   this.large = large
//   this.topping = topping
// }

// CalculatePrice.prototype.small = function (small) {
//   const price = 6
//   return small = price
// }


// -----User Interface Logic-----