const { getUser } = require("../services/auth");

function checkForAuthentication(req, res, next) {
  // const authenticationHeaderValue=req.headers["authorization"];
  const token = req.cookies?.token;
  // if(!authenticationHeaderValue || !authenticationHeaderValue.startsWith("Bearer")) return next();
  // const token=authenticationHeaderValue.split("Bearer ")[1];
  if (!token) return next();
  const user = getUser(token);
  req.user = user;
  next();
}

function restrictTo(roles = []) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");
    if (!roles.includes(req.user.role)) return res.end("UnAuthorized");
    return next();
  };
}

// async function restrictToLoggedInUserOnly(req,res,next){
//     // const userid=req.cookies.uid
//     const userid=req.headers["Authorization"];
//     console.log(req.headers)
//     if(!userid) return res.redirect('/login');
//     const tocken=userid.split("Bearer ")[1];
//     const user=getUser(tocken);
//     if(!user) return res.redirect('/login');
//     req.user=user
//     next();
// }

// async function checkAuth(req,res,next){
//     // const userid=req.cookies.uid
//     const userid=req.headers["authorization"];
//     if(userid){

//         const tocken=userid.split("Bearer ")[1];
//         const user=getUser(tocken);
//         req.user=user
//     }
//     next();
// }

module.exports = {
  checkForAuthentication,
  restrictTo,
};
