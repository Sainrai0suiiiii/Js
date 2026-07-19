/*4. Rate Limiter Counter
Using a `for` loop, simulate 10 incoming login attempts. 
Track failed attempts in a variable; if failed attempts reach 5, 
`break` out of the loop and log `"Account locked"`. 
Otherwise continue looping and log each attempt result.

*/

function simulateLoginAttempts(){
    const attempts = [true, false, false,false,false,false
        ,true,false,true, false, false, true];
    let failedAttempts = 0;

    for(let i = 0 ; i < attempts.length; i++){
        const isSuccess = attempts[i];

        if (isSuccess){
            console.log(`Attempts ${i + 1}: success`);
        }else{
            failedAttempts++;
            console.log(`Attempts${i + 1 }: failed attempts :${failedAttempts}`);
        }
        if(failedAttempts>=5){
            console.log("Account Locked");
            break;

        }
    }
}
simulateLoginAttempts();

function lamuteAttempts(){
    const kosis = [true,false,false,false, false, true, true, true,false, false, false, true ]
    let hawakosis = 0;

    for ( i =0; i < kosis.length; i++){
        const isSuccess = kosis[i];
        if (isSuccess){
            console.log("kosis kam lago");
        }else {
            hawakosis++;
            console.log('kosis bekar');
        }
        if ( hawakosis >= 5){
            console.log("Account blocked");
            break;
        }
    }
}
console.log("\nLamutey break!!");
lamuteAttempts();