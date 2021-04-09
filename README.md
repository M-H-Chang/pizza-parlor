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

 Describe Orders()
 Test: It will have an empty object that will store all of our orders
 Code:
 Orders() {
   pizzaPrice = {};
 }
 Expected Output:
 {
   {[10, 20]}
 }

 Describe Orders.prototype.assignId
 Test: It will add an id of +1 everytime you order
 Code: pizza.assignId(cheese-pizza)
 Expected Output: 
 {
   {cheese-pizza(1)}
 }

Describe Pizza.prototype.addPrice
Test: It will take the size of the pizza and topping of a pizza and add them together for the price.
Code:
const newPizza = new Pizza("medium", ["pepperoni"])
const cost = 10
newPizza.addPrice(cost);
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

Describe largePrice()
Test: It will return the cost of a large pizza and toppings as 14.
Code: 
let newPizza = new Pizza("large", ["pepperoni"])
newPizza.largePrice();
Expected Output:
{
  size: "large"
  toppings: "pepperoni"
  price: 14
}