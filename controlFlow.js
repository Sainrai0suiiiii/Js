// . Order Status Router
//Write a function getOrderStatusMessage(status) that takes a string ("pending", "shipped", "delivered", "cancelled") and returns a matching customer-facing message using switch. Return "Unknown status" for anything else.
function getOrderStatusMessage(status){
    switch(status){
        case "pending":
            return "Your Order has been placed and is awaiting confirmation";
        case "shipped":
            return "Your order has been shipped and its on the way";
        case "delivered":
            return "your order has been delivererd";
        case "cancelled":
            return "Your order has been cancelled";
        default: 
            return "unknown Status";
    }
}

console.log(getOrderStatusMessage("shipped"));
console.log(getOrderStatusMessage("cancelled"));
console.log(getOrderStatusMessage("delivered"));
console.log(getOrderStatusMessage("processing"));

//. Order Status Router
//Write a function getBehaviorMessage(status) that takes a friend name as string ("sain", "sandhaya", "sabina", "mirak") 
// and returns a matching customer-facing behaviour message using switch. Return "Unknown status" for anything else.

function getBehaviorMessage(behavior){

    switch(behavior){
        case "sain":
            return "he is very kind polite when get mad very bad";
        case "sandhaya":
            return "very kind polite loving";
        case "mirak":
            return "very shy";
        case "prakash":
            return "madarchod";
        default : 
            return "bhak muji ";
    
    }

}
console.log("\n behaviour list of the name:")
console.log(getBehaviorMessage("sain"));
console.log(getBehaviorMessage("prakash"));
console.log(getBehaviorMessage("sandhaya"));
console.log(getBehaviorMessage("mirak"));

function getNotification(notify){
    switch (notify){
        case "Like":
            return "Sandhya liked your post!!";
        case "Comment":
            return "Sandhya commented 'iloveyou,sain '";
        case "Share":
            return "Sandhya shared your post!!";
        default:
            return "No more notification"
    }
}

console.log("\nShandhya hai!!!");
console.log(getNotification("Liked"));
console.log(getNotification("Share"));
console.log(getNotification("Comment"));
console.log(getNotification("Poke"));

// discount calculator using if-else-if
/**
 * Discount Calculator
Write calculateDiscount(cartTotal, isMember) where:
Cart > 5000 NPR and member → 20% off
Cart > 5000 NPR and not member → 10% off
Cart > 2000 NPR (any) → 5% off
Else → no discount Use if...else if chains. 
This is the classic e-commerce pricing logic interviewers love asking.
 */

function discountCalculator(cartTotal,isMember){
    let discountPercent = 0;

    if (cartTotal>5000 && isMember){
        discountPercent = 20;
    } else if (cartTotal > 5000 && !isMember){
        discountPercent = 10;

    }else if ( cartTotal > 2000 ){
        discountPercent = 5;
    } else {
        discountPercent = 0;
    }

    const discountAmount = (cartTotal * discountPercent)/100;
    const finalTotal = cartTotal - discountAmount;

    return {
        discountPercent,finalTotal,discountAmount
    };

}
console.log("\ndiscount calculator")
console.log(discountCalculator(6000,true));
console.log(discountCalculator(6000,false));
console.log(discountCalculator(3000,true));
console.log(discountCalculator(3000,false));
console.log(discountCalculator(500,true));

