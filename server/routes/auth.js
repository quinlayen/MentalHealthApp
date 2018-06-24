const router = require("express").Router();
const Client = require("../db/models/Client.js");
const passport = require("passport");
const localStrat = require("passport-local");
const bcrypt = require("bcrypt");

const SALT_ROUND = 12;

passport.serializeUser((user, done) => {
  console.log("serializeUser", user);
  done(null, {
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  console.log("deserializingUser", user);
  Client.where({ username: user.username })
    .fetch()
    .then(user => {
      try {
        user = user.toJSON();
      } catch (e) {
        console.log("caugh this error while calling toJSON", e);
      }
      done(null, user);
    })
    .catch(err => {
      console.log("err", err);
    });
});

passport.use(
  new localStrat(
    { usernameField: "username", passwordField: "password" },
    (username, password, done) => {
      console.log("local is being called, with username", username);
      Client.where({ username })
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

// registers a new user //
router.post("/register", (req, res) => {
  const {
    first_name,
    last_name,
    method,
    contact,
    username,
    password
  } = req.body;
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
        method,
        contact,
        username,
        password: hash
      }).save();
    })
    .then(user => {
      console.log("new user registered");
      user = user.toJSON();
      return res.send(user);
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

// log in users //
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/auth/login" }),
  (req, res) => {
    console.log("logggggged in!!");
    return res.send(req.body);
  }
);

// logs out users //
router.post("/logout", (req, res) => {
  console.log("logggged out!!!");
  req.logout();
  return res.send("user is logged out!!");
});

router.get("/profile/:id", isAuthenticated, (req, res) => {
  const client_id = req.params.id;
  console.log("get this client's details", client_id);
  return Client.where({ client_id })
    .fetch()
    .then(result => {
      return res.json(result);
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

function isAuthenticated(req, res, done) {
  if (req.isAuthenticated()) {
    done();
  } else {
    return res.send("not a valid user");
  }
}

module.exports = router;
