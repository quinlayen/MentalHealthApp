require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const Bundler = require('parcel-bundler');
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const passport = require("passport");
const http = require('http')
const twilio = require('twilio')
const axios = require('axios')
const PORT = process.env.PORT || 8080;
const providersRoute = require("./routes/care_providers.js");
const authRoute = require("./routes/auth.js");

//let bundler = new Bundler('public/index.html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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

// app.get("/", (req, res) => {
//   console.log(req.body);
//   console.log("sanity check");
//   return res.json("hewwwwwwo");
// });

app.get("/api/send", (req, res) => {
  let SID = process.env.TWILIO_ACCOUNT_SID;
  let TOKEN = process.env.TWILIO_AUTH_TOKEN;
  let SENDER = process.env.TWILIO_SMS_NUMBER;
  console.log(SID, TOKEN, SENDER);
  if (!SID || !TOKEN) {
    return res.json({ message: "need TWilio SID and Twilio Token" });

    let client = require("twilio")(SID, TOKEN);

    client.messages
      .create(
        {
          to: '+1' + req.body.recipient.replace(/\D/g,''),
          from: SENDER,
          body: "TESTING"
        },
        (err, data) => {
          if (!err) {
            res.json({
              From: data.from,
              Body: res.body
            });
          } else {
            console.log(err);
          }
        }
      )
      .then(message => console.log(message.sid))
      .done();
  }
});

//app.use(bundler.middleware());

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
