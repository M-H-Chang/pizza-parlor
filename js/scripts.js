// -----Utility Logic-----

// -----Business Logic-----
function Order() {
  this.orders = {};
  this.price = 0;
}

Pizza.prototype.addPrice = function (price) {
  this.orders[price] = price;
}

// Pizza.prototype.smallPrice = function () {
//   this.price += 10;
//   return this.price;
// }

// Pizza.prototype.mediumPrice = function () {
//   this.price += 10;
//   return this.price;
// }

// Pizza.prototype.largePrice = function () {
//   this.price += 10;
//   return this.price;
// }

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}  // use this for the display price function

// -----User Interface Logic-----
let newPizzaOrder = new Pizza()
function displayPrice(priceToDisplay) {
  let priceList = $("#total");
  let htmlForPrice = "";
  Object.keys(priceToDisplay.orders).forEach(function (key) {
    const newPrice = priceToDisplay.addPrice(key);
    htmlForPrice += "<li>" + newPrice.size + " " + newPrice.topping + "</li>";
  })
  priceList.html(htmlForPrice);
}

$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const radio = $("input:radio[name=type]:checked").val();

    let newOrder = new Pizza(radio)
    newPizzaOrder.addPrice(newOrder)
    displayPrice(newPizzaOrder);
  })
})