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


// objects
/*
Objects is a dynamic data structure that stores related data as key-value pairs.
1.Creation using object literal
2.creation using new object() constructor
*/

// creation using object literals
let obj = {
    name : "Sain Rai",
    age : 25,
    job : "Developer"
};
console.log(obj);

let sain ={
    age: 25,
    height : 5.5,
    weight : 70,
    address : "Pathari-Sanischare",
    FathersName : "Lal Bahadur Rai",
    Profession : "Data Scientist",
    Hobby: "Football,Riding Sandhay,Roaming with Sandhya"


};
console.log(sain);

let Rai = {
    Clan : "Haribung",
    SubClan : "Kulung",
    History : 5000

};
console.log(Rai);

// creation Using new Object () Constructor
let obj1 = new Object();
obj1.name = "Sain Rai",
obj1.age = 25,
obj1.job ="Developer"

console.log(obj1);

let hero = new Object();
hero.name = "Sain Rai",
hero.LastName = "kulung",
hero.kale = 12

console.log(hero);

//using . notation:
console.log(hero.name);
console.log(hero.kale);

//using brackcet notation :
console.log (obj1['job']);
console.log(Rai.Clan);
console.log(Rai["SubClan"]);
console.log(sain.FathersName);
console.log(sain['Hobby']);

// adding properties to an object:
obj1.married = true;
console.log(obj1);
Rai.location = 'MAHA KULUNG';
console.log(Rai);
sain.collage = "Softwarica";
console.log(sain);
obj.School = "Nepal Police School";
obj.Adress = "Pathari";
console.log(obj);

//Removing Properties From an Object
delete obj.age;
delete sain.collage;
delete Rai.History;
delete obj1.height;

//Checking if a Property Exists:

// 1. Using the 'in' operator (checks own + inherited properties)
console.log("--- Checking Property Existence ---");
console.log("'name' in obj:", 'name' in obj);        // true (still exists)
console.log("'age' in obj:", 'age' in obj);          // false (was deleted)
console.log("'toString' in obj:", 'toString' in obj); // true (inherited from prototype)

// 2. Using .hasOwnProperty() (checks only own properties, not inherited)
console.log("\n--- Using hasOwnProperty() ---");
console.log("obj.hasOwnProperty('School'):", obj.hasOwnProperty('School'));   // true
console.log("obj.hasOwnProperty('toString'):", obj.hasOwnProperty('toString')); // false
console.log("sain.hasOwnProperty('Hobby'):", sain.hasOwnProperty('Hobby'));   // true
console.log("sain.hasOwnProperty('collage'):", sain.hasOwnProperty('collage')); // false (was deleted)

// 3. Using Object.hasOwn() (modern ES2022+ approach, safer alternative)
console.log("\n--- Using Object.hasOwn() ---");
console.log("Object.hasOwn(obj, 'name'):", Object.hasOwn(obj, 'name'));       // true
console.log("Object.hasOwn(Rai, 'Clan'):", Object.hasOwn(Rai, 'Clan'));       // true
console.log("Object.hasOwn(Rai, 'History'):", Object.hasOwn(Rai, 'History')); // false (was deleted)

// 4. Using strict inequality check against undefined
console.log("\n--- Using undefined check ---");
console.log("obj.School !== undefined:", obj.School !== undefined);   // true
console.log("obj.age !== undefined:", obj.age !== undefined);         // false (deleted)
console.log("hero.LastName !== undefined:", hero.LastName !== undefined); // true

