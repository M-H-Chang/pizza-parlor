## Spec

Describe Pizza()

Test: It will have 3 different attributes that can be used over and over again.
Code:
Pizza(size, toppings, price) {
  this.size = size
  this.toppings = toppings
  this.price = price
}
Const myPizza = new Pizza("medium", ["pepperoni","olives"], 10);
Expected Output:
 myPizza.size;
 "medium"