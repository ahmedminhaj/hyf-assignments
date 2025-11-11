console.log("I love Pizza");

let favoritePizza = "Margarita Cheese"; 
const price = 60;


const numberOfPizza = 3;
const isSelectFamilySizePizza = false;

const totalPrice = price * numberOfPizza * (isSelectFamilySizePizza ? 2 : 1); 

const message = `New pizza order: ${isSelectFamilySizePizza ? "family size " : ""} ${favoritePizza}. The cost for the order is: ${totalPrice}.`;

console.log(message);