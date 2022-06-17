# _Pizza Parlor_

#### By _**Alex Shevlin**_

#### _A webpage to allow users to order a pizza._

## Technologies Used

* HTML
* CSS/Bootstrap
* Javascript/Jquery

## Description

_This webpage allows users to select a pizza by size, sauce, topping, and dipping sauce. By clicking 'How much is it?' the price of the pizza will display underneath the form. Now the buy button is enabled and the user can buy the calculated price of the pizza. The receipt is then displayed on 'Buy!' and the user can re-enter pizza options to have another receipt shown underneath the first one._

_The link for this webpage can be found [here](a-shevlin.github.io/pizza-parlor)._

# Setup/Installation Requirements

* Clone this repository to your desktop.
* Move to pizza-parlor folder.
* Open index.html in your browser.

# Known Bugs

* toppings array displays as Array(1) within Pizza object and will not append to page.

## License

[MIT](/LICENSE)

Copyright (c) _2022_ _Alex Shevlin_

## Tests

```
Describe: Pizza()

Test1: "Create a pizza with size, sauce, and dipping sauce."
Code: new Pizza('Small', 'Red Sauce', 'Ranch');
Expected Output: {size: 'Small', sauce: 'Red Sauce', dipSauce: 'Ranch'}

Test2: "Add price of each size, sauce, and dipping sauce to finalPrice variable."
Code:  
let pizza1 = new Pizza("12", "Pesto", "Ranch");
pizza1.finalPrice();
Expected Output: 6;

Test3: "Add topping price to finalPrice variable."
Code:  
let pizza1 = new Pizza("12", "Pesto", "Ranch", ["Pepperoni", "Olive", "Mushroom"]);
pizza1.finalPrice();
Expected Output: 9;
```