// -----Utility Logic-----

// -----Business Logic-----
function Pizza(size, toppings) {
  this.size = size
  this.toppings = toppings
  this.price = price
}

Pizza.prototype.price = function (cost) {
  return this["price"] = cost
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