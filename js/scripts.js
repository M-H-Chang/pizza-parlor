// -----Utility Logic-----

// -----Business Logic-----
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

Pizza.prototype.addPrice = function (price) {
  if (this.size === "small") {
    this.price += 8;
  } else if (this.size === "medium") {
    this.price += 10;
  } else if (this.size === "large") {
    this.price += 12;
  } else {
    return alert("Please enter a size!")
  }
  if (this.topping === "pepperoni") {
    this.price += 3
  } else if (this.topping === "meat") {
    this.price += 4
  } else if (this.topping === "vege") {
    this.price += 2
  } else {
    this.price += 0;
  }
}

// -----User Interface Logic-----
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let newOrders = [];
    const radio = $("input:radio[name=type]:checked").val();
    if (radio == "small") {
      newOrders.push("10")
    } else if (radio == "medium") {
      newOrders.push("12")
    } else if (radio == "large") {
      newOrders.push("14")
    } else {
      return alert("Please choose a size.")
    }
    $("#total").text(newOrders)
  })
})