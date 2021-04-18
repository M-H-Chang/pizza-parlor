Specs

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

# _Pizza Parlor_

#### _User can choose a size and toppings for their pizza and then a price will generate._

#### By _**Min Chang**_

## Technologies Used

* _VS Code_
* _GitHub_
* _HTML_
* _CSS_
* _Javascript_
* _JQuery_

## Description

_This website was created to help implement a better way of ordering for pizza restaurants. It gives the option of choosing a size which is based on cost
as well as the toppings that the user wants to put on their pizza. This will then display a cost for the user to make sure that they know how much to pay when they
visit the pizza restaurant._

## Setup/Installation Requirements

* _Log onto github_
* _Access the repository of pizza-parlor_
* _Copy clone link_
* _Access local repository and which directory you want to clone from_
* _Gitclone_
* _Open cloned folder and open index.html in browser_
* _Modify as necessary_

_You do not need to run a server to run this application. No databases need to be set. This is a single repository that you need to access and you do not need any other application to run the webpage._

## Known Bugs

* _No Known Bugs_

## License

_MIT License

Copyright (c) [2021] [Min Chang]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
_

## Contact Information

_Min Chang: email: minchangmhc@gmail.com_