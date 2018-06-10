

require("dotenv").config({path: __dirname + '.env'});
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



if (process.env.NODE_ENV !== 'production') {
  require("dotenv").load();
}

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

app.post("/api/send", (req, res) => {
  let SID = process.env.TWILIO_API_KEY;
  let TOKEN = process.env.TWILIO_AUTH_TOKEN;
  let SENDER = process.env.TWILIO_SMS_NUMBER;
 
  // console.log(req, 'is req')
  if (!SID || !TOKEN) {
    return res.json({ message: "need TWilio SID and Twilio Token" });
  }
    let client = require("twilio")(SID, TOKEN);
console.log(req.body, "this is in server")
    client.messages
      .create(
        {
          to: '+1' + req.body.recipient,
          from: SENDER,
          body: req.body.message,
          // statusCallback: `http://${PORT}/client/home`
        })
      //   ,
      //   (err, data) => {
      //     if (!err) {
      //       console.log(data, 'this is message')
      //       res.json({
      //         From: data.from,
      //         Body: res.body
      //       });
      //     } else {
      //       console.log(err);
      //     }
      //   }
      // )
      .then(message => console.log(message.sid, 'message sid'))
      .done();
  
});

//app.use(bundler.middleware());

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
