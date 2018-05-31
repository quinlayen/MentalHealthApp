const router = require("express").Router();
const Client = require("../db/models/Client.js");
const passport = require("passport");
const localStrat = require("passport-local");
const bcrypt = require("bcrypt");

const SALT_ROUND = 12;

passport.serializeUser((user, done) => {
  console.log("serializeUser", user);
  done(null, {
    email: user.email
  });
});

passport.deserializeUser((user, done) => {
  console.log("deserializingUser", user);
  Client.where({ email: user.email })
    .fetch()
    .then(user => {
      user = user.toJSON();
      done(null, user);
    })
    .catch(err => {
      console.log("err", err);
    });
});

passport.use(
  new localStrat(
    { usernameField: "email", passwordField: "password" },
    (email, password, done) => {
      console.log("local is being called");
      Client.where({ email })
        .fetch()
        .then(user => {
          console.log("user in local strategy", user);
          user = user.toJSON();
          bcrypt.compare(password, user.password).then(res => {
            if (res) {
              done(null, user);
            } else {
              done(null, false);
            }
          });
        })
        .catch(err => {
          done(null, false);
        });
    }
  )
);

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  bcrypt
    .genSalt(12)
    .then(salt => {
      console.log("salt", salt);
      return bcrypt.hash(password, salt);
    })
    .then(hash => {
      console.log("hash", hash);
      return Client.forge({ email, password: hash }).save();
    })
    .then(user => {
      console.log("new user registered");
      user = user.toJSON();
      return res.redirect("/");
    })
    .catch(err => {
      console.log("err", err);
      return res.redirect("/auth/register");
    });
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/auth/login" }),
  (req, res) => {
    console.log("logggggged in!!");
    return res.redirect("/");
  }
);

router.post("/logout", (req, res) => {
  console.log("logggged out!!!");
  req.logout();
  return res.redirect("/");
});

router.get("/secret", isAuthenticated, (req, res) => {
  return res.send("SECRETS");
});

function isAuthenticated(req, res, done) {
  if (req.isAuthenticated()) {
    done();
  } else {
    return res.redirect("/");
  }
}

module.exports = router;
