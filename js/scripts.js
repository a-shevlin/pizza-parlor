// function Sold() {
//   this.pizzas = {};
//   this.currentId = 0;
// }

// Sold.prototype.addPizza = function(pizza) {
//   pizza.id = this.assignId();
//   this.pizzas[pizza.id] = pizza;
// }

// Sold.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }
function Pizza(size, sauce, dipSauce) {
  this.size = size;
  this.sauce = sauce;
  this.dipSauce = dipSauce;
  this.toppings = [];
  this.priceMsg = this.finalPrice;
}

const size = [
  {size: "12", price: 4},
  {size: "16", price: 6},
  {size: "20", price: 7},
  {size: "24", price: 8}
]

const sauce = [
  {sauce: "Marinara", price: 0},
  {sauce: "Pesto", price: 1},
  {sauce: "Alfredo", price: 1}
]

const dipSauce = [
  {dipSauce: "Marinara", price: 1},
  {dipSauce: "Ranch", price: 1},
  {dipSauce: "Blue Cheese", price: 2},
]


Pizza.prototype.finalPrice = function() {
  let finalPrice = 0;
  for (let i = 0; i < size.length; i++) {
    if (this.size === size[i].size){
      finalPrice += size[i].price;
    }
  }
  for (let i = 0; i < sauce.length; i++) {
    if (this.sauce === sauce[i].sauce){
      finalPrice += sauce[i].price;
    }
  }
  for (let i = 0; i < dipSauce.length; i++) {
    if (this.dipSauce === dipSauce[i].dipSauce){
      finalPrice += dipSauce[i].price;
    }
  }
  for (let i = 0; i < this.toppings.length; i++) {
    finalPrice += this.toppings[i].length;
  }
  console.log(finalPrice);
  return finalPrice;
}

// let sold = Sold();

$(document).ready(function() {
  $('#start').click(function(event) {
    event.preventDefault();
    $('.mainPage').fadeOut('fast');
    $('.pizzaForm').fadeIn();
    console.log('click');
  })

  $("#howmuch-button").click(function(event) {
    event.preventDefault();
    let newPizza = getPizza();
    let cost1 = newPizza.finalPrice();
    $('#pizza-price').text("$ " + cost1);
    $('#buy-button').removeAttr('disabled');
  })
  $('#buy-button').click(function(event) {
    event.preventDefault();
    let newPizza = getPizza();
    attachSoldPizzas(newPizza);
    $('#buy-button').prop('disabled', true);
    clearPizzaForm();
  })
})

function getPizza() {
  const size = $('select#sizeList').val();
  const sauce = $('select#sauceList').val();
  const dipSauce = $('select#dipList').val();
  let toppings = [];
  let newPizza = new Pizza(size, sauce, dipSauce);
  $('input:checkbox[name=topping]:checked').each(function() {
    toppings.push($(this).val());
  });
  newPizza.toppings.push(toppings);
  return newPizza;
}

function attachSoldPizzas(pizza) {
  const size = document.createElement('ul');
  size.innerHTML = pizza.size;
  const sauce = document.createElement('li');
  sauce.innerHTML = pizza.sauce;
  const toppings = document.createElement('li');
  toppings.innerHTML = pizza.toppings;
  const dip = document.createElement('li');
  dip.innerHTML = pizza.dipSauce;
  const price = document.createElement('li');
  price.innerHTML = "$ " + pizza.priceMsg;
  size.appendChild(sauce);
  size.appendChild(sauce);
  size.appendChild(toppings);
  size.appendChild(dip);
  $('#pizzas-items-list').append(size);
  $('.receipt h4').show();
}

function clearPizzaForm() {
  $('input:checkbox[name=topping]').prop('checked', false);
  $('.cart').toggle();
}

//switch case for finalPrice
  // for (topping in topping) {
  //   finalPrice += 1
  // }

  // switch (size) {
  //   case("12"):
  //     finalPrice += 4;
  //   case("16"):
  //     finalPrice += 6;
  //   case("20"):
  //     finalPrice += 7;
  //   case("24"):
  //     finalPrice += 8;
  //     break;
  //   default:
  //     console.log("Not pizza Size")
  // }

  // switch (sauce) {
  //   case("Marinara"):
  //     finalPrice += 0;
  //   case("Pesto"):
  //     finalPrice += 1;
  //   case("Alfredo"):
  //     finalPrice += 1;
  //     break;
  //   default:
  //     console.log("Not pizza sauce")
  // }

  // switch (dipSauce) {
  //   case("Marinara"):
  //     finalPrice += 0;
  //   case("Pesto"):
  //     finalPrice += 1;
  //   case("Alfredo"):
  //     finalPrice += 1;
  //     break;
  //   default:
  //     console.log("Not pizza sauce")
  // }