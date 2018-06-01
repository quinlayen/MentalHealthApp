const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const passport = require("passport");

const PORT = process.env.PORT || 8080;
const providersRoute = require("./routes/care_providers.js");
const authRoute = require("./routes/auth.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    store: new RedisStore(),
    secret: "mentalhealthapphelps",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);
app.use("/doctors", providersRoute);

app.get("/", (req, res) => {
  console.log("sanity check");
  return res.json("hewwwwwwo");
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
