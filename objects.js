const budi = {
    name : 'Sandhaya Lawati',
    age: 24,
    city: 'Kushal chowk',
    profession : 'Chatared Account',
    married : true,
    spouse : 'Sahin Kulung'
};

for(let key in budi){
    console.log(key);
    // console.log(Value);
    console.log("key:", key);
    console.log("Value:", budi[key]);
    console.log("+++++++++++++++++++++++++");
}

for(let value in budi){
    console.log(value);
}

// the  real - life scenario : an ecommerce shopping cart
// imagine building the checkout page for an e-commerce website where the user's shoppin cart
// is stored as an object where the product IDS are the key and the values are ojects containing the 
// product details(price and quantity).
// The problem:--
// #calculate the total price of all items in the cart
// #count the total quantity of items being purchased
// #generate a text summary to display to user before they pay

//1 the shopping cart data structure (object)
const shoppingCart ={
    item_123 : {name: "Wireless Mouse", price: 23, quantity: 2},
    item_234 : {name: "Nike phantom", price: 129, quantity: 3},
    item_333 : {name: "Vape", price:200, quantity : 3}

};

//2. function to process the checkout
function processCheckout(cart){
    let grandTotal = 0;
    let totalItemsCount= 0;
    let receiptSummary = "--- Your Order Summary ---\n";

    //3.using for..in to loop through the cart object
    for(let itemId in cart){
        // safety check to ensure that the property belons to cart, not its prototype
        if (Object.hasOwn(cart,itemId)){

            //accessing the specific item object using bracket Notation
            let item = cart[itemId];

            //calculating total for this specific item
            let itemTotalCost = item.price * item.quantity;

            //update our runnign totals
            grandTotal += itemTotalCost;
            totalItemsCount += item.quantity;

            //append details to the summary string
            receiptSummary += `-${item.name}: ${item.quantity} x  ${item.price} == ${itemTotalCost}\n`;
        }

    }

    // add final calculation to the summary
    receiptSummary += "-------------------\n";
    receiptSummary += `Total Items: ${totalItemsCount}\n`;
    receiptSummary += `Grand Total : ${grandTotal}`;

    //return the calculated data
    return{
        grandTotal: grandTotal,
        totalItemsCount: totalItemsCount,
        summaryText: receiptSummary
    };
}



//4.returning the function

const checkoutDetails = processCheckout(shoppingCart);

//displaying the result
console.log(checkoutDetails.summaryText);