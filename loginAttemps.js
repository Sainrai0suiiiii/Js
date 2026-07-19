/*4. Rate Limiter Counter
Using a `for` loop, simulate 10 incoming login attempts. 
Track failed attempts in a variable; if failed attempts reach 5, 
`break` out of the loop and log `"Account locked"`. 
Otherwise continue looping and log each attempt result.

*/

function simulateLoginAttempts(){
    const attempts = [ true, false,false,true,true,false,true, false, false, true];
    let failedAttempts = 0;

    for(let i = 0 ; i < attempts.length; i++){
        const isSuccess = attempts[i];

        if (isSuccess){
            console.log(`Attempts ${i + 1}: success`);
        }else{
            failedAttempts++;
            console.log(`Attempts${i + 1 }: failed attempts :${failedAttempts}`);
        }
    }

}