/*
6. Password Validator
Write validatePassword(password) that checks multiple conditions (length ≥ 8, has number, has uppercase, has special char) 
using nested if statements, returning specific error messages for each failing rule instead of a generic "invalid password" — 
this is exactly what real signup forms do.
*/

function validatePassword(password){
    if (password.length < 8){
        return "Password must contain at least one number!!";
    }else {
        if(!/[0-9]/.test(password)){
            return " password must contain number 12345567890";

        }else{
            if (!/[A-Z]/.test(password)){
                return " must contain Upper Case ASDFASDGASDG";
            } else {
                if(!/[!@#$%^&*]/.test(password)){
                    return" must contain !@#%#^&**";
                }else{
                    return " Password is valid";
                }
            }
        }
    }

}
console.log(validatePassword("Abc"));
console.log(validatePassword("Abcwe"));
console.log(validatePassword("Abasdfac"));
console.log(validatePassword("Abc11"));
console.log(validatePassword("bc11**"));
console.log(validatePassword("Abcgdgdf!11"));

/*
Using Guard Clause:
avoiding nesting
*/

function passkeyVerification(passkey){
    if(passkey.length < 8) return "Password must contain eight letters";
    if(!/[A-Z]/.test(passkey) )return "Password must contain UpperCase";
    if (!/[!@#$%^&*]/.test(passkey) )return"password must contain atleast one Special character";
    if (!/[0-9]/.test(passkey))return "password must contain one numerical value";
    return "Password is Valid";

}
console.log("\npass word verification");
console.log(passkeyVerification("abc"));
console.log(passkeyVerification("abc1asdsasd"));
console.log(passkeyVerification("Abc1244dfsdf"));
console.log(passkeyVerification("ab**88sdfasfd"));
console.log(passkeyVerification("abcA%5asdfasf"));
console.log(passkeyVerification("abc12312!!Aa"));

/*
7. Signup Form Field Validator
Write validateSignupField(fieldName, value) that checks a single form field before submission, using nested if statements (ya guard clause style, jun ramailo lagcha):

If fieldName === "email":

Empty huna hudaina
@ symbol huna parcha
Return "Invalid email" if fails, "Valid email" if passes


If fieldName === "phone":

Exactly 10 digits huna parcha (Nepal ko mobile number jasto)
Only numbers huna parcha, letters haina
Return specific error for each ("Phone must be 10 digits" vs "Phone must contain only numbers")


If fieldName === "username":

Length 3-20 characters ko beech huna parcha
Space huna hudaina
Return specific error for each


Kunai matching fieldName napaye → return "Unknown field"

*/

function validateSignupField(fieldName, value){
    if(fieldName === "email") return
}