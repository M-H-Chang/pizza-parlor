## Spec

Describe Pizza()
Test: It will have 3 different attributes that can be used over and over again.
Code:
Pizza(size, toppings) {
  this.size = size
  this.toppings = toppings
}
Const myPizza = new Pizza("medium", ["pepperoni","olives"], 10);
Expected Output:
 myPizza.size;
 "medium"

Describe Pizza.prototype.price
Test: It will take the size of the pizza and topping of a pizza and add them together for the price.
Code:
const newPizza = new Pizza("medium", ["pepperoni"])
const cost = 10
newPizza.price(cost);
Expected Output:
{
  size: "medium"
  toppings: "pepperoni"
  cost: 10
}

Describe smallPrice()
Test: It will return the cost of a small pizza and toppings as 10.
Code: 
let newPizza = new Pizza("small", ["pepperoni"])
newPizza.smallPrice();
Expected Output:
{
  size: "small"
  toppings: "pepperoni"
  price: 10
}

Describe mediumPrice()
Test: It will return the cost of a medium pizza and toppings as 12.
Code: 
let newPizza = new Pizza("medium", ["pepperoni"])
newPizza.mediumPrice();
Expected Output:
{
  size: "medium"
  toppings: "pepperoni"
  price: 12
}