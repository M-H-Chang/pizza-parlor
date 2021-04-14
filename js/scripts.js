// -----Utility Logic-----

// -----Business Logic-----
function Pizza() {
  this.orders = {};
  this.price = 0;
}

Pizza.prototype.addPrice = function (price) {
  this.orders.push(price)
}

// -----User Interface Logic-----
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let newPizzaOrder = new Pizza()
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