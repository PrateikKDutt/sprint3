// -- JAVASCRIPT CAFE! -- //

let Products = {
  whiteCoffe: {
    stock: 4,
    price: 4,
  },

  blackCoffe: {
    stock: 7,
    price: 3.5,
  },

  muffin: {
    stock: 5,
    price: 8.5,
  },

  eggs: {
    stock: 1,
    price: 12.5,
  },
}

function displayProducts() {
  document.getElementById('whiteCoffe').innerHTML =
    'whiteCoffe:' + Products.whiteCoffe.stock

  document.getElementById('blackCoffe').innerHTML =
    'blackCoffe:' + Products.blackCoffe.stock

  document.getElementById('muffin').innerHTML =
    'muffin:' + Products.muffin.stock

  document.getElementById('eggs').innerHTML = 'eggs:' + Products.eggs.stock
}

displayProducts()

///------- Customers---///

let Customers = {
  order:[]
}

let minOrderSize =1
let MaxOrderSeize=5

function generateCustomerOrder(){
  //Get a radom size for the order in a range, 1-5
  //make a new array of the things they're ordering
  //display the custom order

  let orderSize = getRandomInt(minOrderSize,MaxOrderSeize)

let newOrder = []

let productNames = Object.keys(Products)



  for (let i = 0; i < = orderSize; i++) {

    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]
    NewOrder.push(productName)
 
  }
Customers.order = newOrder
displayCustomerOrder()

}


generateCustomerOrder()

function displayCustomerOrder(){
  document.getElementById{"customerOder"}.innerHTML = "customer order:" +
  Customers.order
}

document.getElementById('customerButton').onclick= generateCustomerOrder
///----Transaction---////

let cash = 0

function displayCash() {
  document.getElementById("cash").innerHTML = cash
}
displayCash

///---///
function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}