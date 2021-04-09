// -----Utility Logic-----

// -----Business Logic-----
function Pizza(size, toppings) {
  this.pizzaPrice = {};
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.addPrice = function (cost) {
  this.pizzaPrice[cost] = cost
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

// -----User Interface Logic-----
function displayPrice(priceToDisplay) {
  let results = $("#total");
  let htmlForPizzaPrice = "";
  Object.keys(priceToDisplay.addPrice).forEach
    (function (key) {
      const
    })
}

$(document).ready(function () {
  let newPizza = new Pizza();
  $("form#form").submit(function (event) {
    event.preventDefault();
    const small = $("input:radio[id=small]:checked").val();
    const medium = $("input:radio[id=medium]:checked").val();
    const large = $("input:radio[id=large]:checked").val();
    let price;
    if (small === "smallSize") {
      newPizza.addPrice();
    } else if (medium === "mediumSize") {
      newPizza.addPrice();
    } else if (large === "largeSize") {
      newPizza.addPrice();
    } else {

    }
  })
  newPizza.addPrice();
})