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

$(document).ready(function() {
  $('#start').click(function(event) {
    event.preventDefault();
    $('.mainPage').fadeOut('fast');
    $('#start').fadeOut('fast');
    $('.pizzaForm').fadeIn();
    console.log('click');
  })

  $("#howmuch-button").click(function(event) {
    event.preventDefault();
    let newPizza = getPizza();
    let cost1 = newPizza.finalPrice();
    $('#cart').fadeIn();
    $('#pizza-price').text("$ " + cost1);
    console.log("cartClick");
    $('#buy-button').removeAttr('disabled');
  })
  $('form#pizza').submit(function(event) {
    event.preventDefault();
    let newPizza = getPizza();
    $('#receipt').fadeIn();
    attachSoldPizzas(newPizza);
    $('#buy-button').prop('disabled', true);
    clearPizzaForm();
  })
})

function getPizza() {
  const size = $('select#sizeList').val();
  const sauce = $('select#sauceList').val();
  const dipSauce = $('select#dipList').val();
  let newPizza = new Pizza(size, sauce, dipSauce);
  let topping = [];
  for (let i = 0; i < newPizza.toppings.length; i++) {
    topping[i] = newPizza.toppings[i];
  }
  $('input:checkbox[name=topping]:checked').each(function() {
    topping.push($(this).val());
  });
  console.log(topping);
  newPizza.toppings.push(topping);
  console.log(newPizza);
  return newPizza;
}

function attachSoldPizzas(pizza) {
  let cost1 = pizza.finalPrice();
  let topping = [];
  for (let i = 0; i < pizza.toppings[0].length; i++) {
    topping[i] = pizza.toppings[i];
  }
  console.log(topping);
  const size = document.createElement('p');
  size.innerHTML = "A " + pizza.size + "\" Pizza";
  const sauce = document.createElement('p');
  sauce.innerHTML = "with " + pizza.sauce;
  const toppings = document.createElement('p');
  toppings.innerHTML = toString(topping) + " for toppings.";
  const dip = document.createElement('p');
  dip.innerHTML = pizza.dipSauce + " on the side.";
  const price = document.createElement('p');
  price.innerHTML = "$ " + cost1;
  size.appendChild(sauce);
  size.appendChild(sauce);
  size.appendChild(dip);
  size.appendChild(price);
  //size.appendChild(toppings);
  console.log(size);
  $('.pizza-item-list').append(size);
}

function clearPizzaForm() {
  $('input:checkbox[name=topping]').prop('checked', false);
  $('.cart').toggle();
}
