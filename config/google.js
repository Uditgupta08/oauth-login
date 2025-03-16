const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("Google Profile:", profile);
        let email = profile.emails[0].value;
        let user = await User.findOne({ email });

        if (!user) {
          user = new User({
            fullname: profile.displayName,
            username: email.split("@")[0], 
            email: email,
            googleId: profile.id,
          });
          await user.save();
          console.log("New Google User Created:", user);
        }
        const token = jwt.sign(
          { _id: user._id, fullname: user.fullname },
          process.env.SECRET_KEY,
          { expiresIn: "1d" }
        );

        return done(null, { user, accessToken: token });
      } catch (error) {
        console.error("Google OAuth Error:", error);
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((userData, done) => {
  done(null, userData);
});

passport.deserializeUser((userData, done) => {
  done(null, userData);
});

module.exports = passport;
