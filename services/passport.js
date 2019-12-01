const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const keys = require("../config/keys");

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  if (user) {
    done(null, user);
  }
});
// console.developers.google.com

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSercret,
      callbackURL:
        "https://fast-caverns-12060.herokuapp.com/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ googleId: profile.id });
        if (user) {
          //
          done(null, user);
        } else {
          const newUser = new User({
            googleId: profile.id
          });

          const savesUser = await newUser.save();
          await done(null, savesUser);
        }
      } catch (err) {
        console.log("err", err);
      }
    }
  )
);
