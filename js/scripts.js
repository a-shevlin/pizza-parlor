function Pizza(size, sauce, dipSauce) {
  this.size = size;
  this.sauce = sauce;
  this.dipSauce = dipSauce;
  this.topping = [];
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
  return finalPrice;
}

$(document).ready(function() {
  $('#start').click(function(event) {
    event.preventDefault();
    $('.mainPage').fadeOut('fast');
    $('.pizzaForm').fadeIn();
  })

  $("form#pizza").submit(function(event) {
    event.preventDefault();

    const size = $('select#sizeList').val();
    const sauce = $('select#sauceList').val();
    const dip = $('select#dipList').val();
    let topping = [];

    $('input:checkbox[name=topping]:checked').each(function() {
      topping.push($(this).val());
    });

    let pizza1 = new Pizza(size, sauce, dip);
    pizza1.topping.push(topping);
    let cost1 = pizza1.finalPrice();

    $()
  })
})
