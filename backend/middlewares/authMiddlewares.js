const jwt = require("jsonwebtoken");
const User = require("../models/users");

const reqAccess=(req,res,next)=>{
  const tok=req.cookies.access;
  if(tok){
    jwt.verify(tok,"sec key",(err,decodedToken)=>{
      if(err){
        console.log(err)
        res.redirect("/");
      } else next();
    });
  }
  else res.redirect("/")
}

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret key", (err, decodedToken) => {
      if (err) {
        res.redirect("/adminlogin");
      } else next();
    });
  } else res.redirect("/adminlogin");
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret key", async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = {
  reqAccess,
  requireAuth,
  checkUser,
};
