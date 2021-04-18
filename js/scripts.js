// -----Utility Logic-----

// -----Business Logic-----
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

Pizza.prototype.addPrice = function () {
  if (this.size === "small") {
    this.price += 8;
  } else if (this.size === "medium") {
    this.price += 10;
  } else {
    this.price += 12;
  }
  if (this.topping === "pepperoni") {
    this.price += 3
  } else if (this.topping === "meat") {
    this.price += 4
  } else if (this.topping === "vege") {
    this.price += 2
  } else {
    this.price;
  } return this.price
}  

// -----User Interface Logic-----
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const radio = $("input:radio[name=type]:checked").val();
    const select = $("#toppings :selected").val();
    let newOrders = new Pizza(radio, select)
    newOrders.addPrice();
    $("#total").text(newOrders.price)
  })
})