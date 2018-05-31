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
  const { first_name, last_name, phone, email, password } = req.body;
  bcrypt
    .genSalt(12)
    .then(salt => {
      console.log("salt", salt);
      return bcrypt.hash(password, salt);
    })
    .then(hash => {
      console.log("hash", hash);
      return Client.forge({
        first_name,
        last_name,
        phone,
        email,
        password: hash
      }).save();
    })
    .then(user => {
      console.log("new user registered");
      user = user.toJSON();
      return res.send("new user registered");
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/auth/login" }),
  (req, res) => {
    console.log("logggggged in!!");
    return res.send("user is logged in!!");
  }
);

router.post("/logout", (req, res) => {
  console.log("logggged out!!!");
  req.logout();
  return res.send("user is logged out!!");
});

router.get("/secret", isAuthenticated, (req, res) => {
  return res.send("SECRETS");
});

function isAuthenticated(req, res, done) {
  if (req.isAuthenticated()) {
    done();
  } else {
    return res.send("not a valid user");
  }
}

module.exports = router;
