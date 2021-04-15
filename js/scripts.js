// -----Utility Logic-----

// -----Business Logic-----
function Pizza(size) {
  this.size = size;
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