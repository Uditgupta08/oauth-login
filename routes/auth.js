const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/loginUser" }),
    (req, res) => {
        res.cookie("accessToken", req.user.accessToken, {
            httpOnly: true,
            sameSite: "lax",
          });
      
          res.redirect("/success");
    }
  );
  router.get("/logout", (req, res) => {
    req.logout(() => {
      res.clearCookie("accessToken");
      res.redirect("/loginUser");
    });
  });
  
  module.exports = router;