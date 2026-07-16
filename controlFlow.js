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
//Write a function getOrderStatusMessage(status) that takes a friend name as string ("sain", "sandhaya", "sabina", "mirak") and returns a matching customer-facing behaviour message using switch. Return "Unknown status" for anything else.