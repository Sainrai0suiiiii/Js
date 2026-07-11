//conditional statement allows prgrams to make decisions based on specific conditions'
// if-else statement
let age = 25
if (age>23){
    console.log("congratulation you are old enough to leave home");
}

let aim = 50000;
if ( aim > 500000){
    console.log("work hard!!!");
}else{
    console.log("have a nice tri!!");
}

//nested if else

let sain = 5.5;
if (sain == 5.5){
    if (sain >5.2){
        console.log("perfect for sain kulung!!");
    }
    if ( sain > 5.3){
        console.log("still perfect!!");
    }
    else{
        console.log("you are unfit bitch!!0000");
    }
}

let priceOfChocolate = 2;
let hasAmount = 5;
const canBuy = hasAmount>=priceOfChocolate;
if(canBuy){
    console.log("Enjoy your chocolate");
}else{
    console.log("have some money bitch");
}

let job = "Software Developer";

switch (job){
    case 'Software Engineer':
        console.log("builds programs that develop software");
        break;
    case 'Software Developer':
        console.log("that builds software");
        break;
    case 'software programmer':
        console.log("that program software");
        break;
    default:
        console.log("bhak bhenchod"); 
}

