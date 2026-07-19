/**
 * 3. Auth Middleware Simulation
Simulate Express middleware logic: write `checkAccess(user)` where `user` is `{ role: 'admin' | 'user' | 'guest', isVerified: boolean }`.
 Return `"Access granted"` only if role is admin,
 OR (role is user AND isVerified is true). 
Otherwise `"Access denied"`. Practice combining logical operators (`&&`, `||`) inside conditionals —
 this mirrors real `ProtectedRoute` logic you already built
 */

 /**
  * checkAcess(user){
  * user : role "admin"| 'user'| "guest"
  * isVerified:boolean
  * return "access granted"
  * 
  * }
  */

function checkAccess(user){
    if(user.role === 'Admin'||( user.role === 'User' && user.isVerified ) || (user.role === 'Guest' && user.isVerified)){

        return "Access Granted";
    }else{
        return "Access Denied";
    }
}

console.log(checkAccess({role:"Admin",isVerified:false}));
console.log(checkAccess({role:"user",isVerified:false}));
console.log(checkAccess({role:"guest",isVerified:false}));
console.log(checkAccess({role:"Guest",isVerified:true}));
console.log(checkAccess({role:"user",isVerified:true}));// case - sensitive
console.log(checkAccess({role:"User",isVerified:true}));

/**
 * making my hood entry section using imaginary variable name
 */

function ratoGhar(gang){
    if (gang.role === "Kta Haru" && gang.isDamSure || (gang.role === "Family Members" && gang.isDamSure)){
        return "Access Granted to my palace!!!";
    }else{
        return"You ain't welcome . Sorry!!!";
    }
}
console.log("\nIn the Hoood:");
console.log(ratoGhar({ role : "kta Haru" }));
console.log(ratoGhar({ role : "Kta Haru", isDamSure:true }));
console.log(ratoGhar({role:"Family Members"}));

function requireAccess(req, res, next){
    if(req.user.role === "admin" || (req.user.role === "user" && req.user.isVerified)){
        return next ();
    }
    return res.status(403).jason({ message: "Access denied"});
}