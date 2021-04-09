// -----Utility Logic-----

// -----Business Logic-----
function Orders() {
  this.pizzaPrice = {};
  this.price = 0;
}

Orders.prototype.addPrice = function (cost) {
  this.pizzaPrice[cost] = cost
}

Orders.prototype.smallPrice = function () {
  this.price += 10;
  return this.price;
}

Orders.prototype.mediumPrice = function () {
  this.price += 10;
  return this.price;
}

Orders.prototype.largePrice = function () {
  this.price += 10;
  return this.price;
}
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}



// -----User Interface Logic-----
// function displayPrice(priceToDisplay) {
//   let results = $("#total");
//   let htmlForPizzaPrice = "";
//   Object.keys(priceToDisplay.pizzaPrice).forEach(function (key) {
//     const pizzaCost = priceToDisplay.addPrice(key)
//     htmlForPizzaPrice = pizzaCost.price
//   })
//   results.html(htmlForPizzaPrice)
// }

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
  // newPizza.addPrice();
  // displayPrice(newPizza);
})