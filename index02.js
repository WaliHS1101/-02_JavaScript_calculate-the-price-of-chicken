let setPrice = prompt("Set the price of Chicken Per Kg");
let Bill = prompt("how much you like to order , write price");

let gram = 1000 / setPrice * Bill ;

document.write( "You will get " , gram , "grams of chicken because you have paid ",  Bill , "Rs.");