// -----Utility Logic-----

// -----Business Logic-----
function Pizza(size, toppings) {
  this.orders = {};
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.addPrice = function (smallCost) {
  return this.orders = smallCost
}

Pizza.prototype.smallPrice = function () {
  this.price += 10;
  return this.price;
}

Pizza.prototype.mediumPrice = function () {
  this.price += 10;
  return this.price;
}

Pizza.prototype.largePrice = function () {
  this.price += 10;
  return this.price;
}

function CalculatePrice(small, medium, large, topping) {
  this.small = small
  this.medium = medium
  this.large = large
  this.topping = topping
}

CalculatePrice.prototype.small = function (small) {
  const price = 6
  return small = price
}


// -----User Interface Logic-----