// -----Utility Logic-----

// -----Business Logic-----
function Pizza(size, toppings) {
  this.orders = {};
  this.size = size;
  this.toppings = toppings;
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

// function Order(size, topping) {
//   this.size = size;
//   this.topping = topping;
// }  // use this for the display price function

CalculatePrice.prototype.small = function (small) {
  const price = 6
  return small = price
}


// -----User Interface Logic-----
function displayPrice(priceToDisplay) {
  let priceList = $("#total");
  let htmlForPrice = "";
  Object.keys(priceToDisplay.orders).forEach(function (key) {
    const newPrice = priceToDisplay.addPrice(key);
    htmlForPrice += "<li>" + newPrice.size + " " + newPrice.topping + "</li>";
  })
  priceList.html(htmlForPrice);
}

$(documnet).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const small
    const medium
    const largePrice


  })
})