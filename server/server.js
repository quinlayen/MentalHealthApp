const express = require('express');
const app = express();
<<<<<<< HEAD
const bodyParser = require('body-parser');
var AccessToken = require('twilio').jwt.AccessToken;
var Twilio;
// const routes = require("./routes");

const PORT = process.env.PORT || 8080;
const providersRoute = require('./routes/care_providers.js');
// const authRoute = require("./routes/auth.js");
=======
const bodyParser = require("body-parser");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const passport = require("passport");

const PORT = process.env.PORT || 8080;
const providersRoute = require("./routes/care_providers.js");
const authRoute = require("./routes/auth.js");
>>>>>>> development

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
app.use('/', providersRoute);
app.post('/sendText', (req, res) => {
  console.log(req);
});
// app.get("/", (req, res) => {
//   console.log("sanity check");
//   return res.json("hewwwwwwo");
// });
=======
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
>>>>>>> development

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
