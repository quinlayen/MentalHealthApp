require("dotenv").config({ path: __dirname + ".env" });
//nodemon server/server.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const Bundler = require('parcel-bundler');
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const passport = require("passport");
const http = require("http");
const twilio = require("twilio");
const axios = require("axios");
const PORT = process.env.PORT || 8080;

const providersRoute = require("./routes/care_providers.js");
const authRoute = require("./routes/auth.js");
const webpush = require("web-push");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

app.use(express.static(__dirname + "/styles/static"));

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

let SID = process.env.TWILIO_API_KEY;
let TOKEN = process.env.TWILIO_AUTH_TOKEN;
let SENDER = process.env.TWILIO_SMS_NUMBER;
let SERVICE = process.env.TWILIO_SERVICE_SID;

let GOOGLE_KEY = process.env.GOOGLE_BROWSER_KEY;
let VAPID_PUBLIC = process.env.VAPID_PUBLIC_KEY;
let VAPID_PRIVATE = process.env.VAPID_PRIVATE_KEY;
webpush.setGCMAPIKey(GOOGLE_KEY);
webpush.setVapidDetails(
  "mailto:etherealtoast@gmail.com",
  VAPID_PUBLIC,
  VAPID_PRIVATE
);

//processing sms
app.post("/api/sms", (req, res) => {
  console.log("Main req");

  // const smsCount = req.session.counter || 0;
  // console.log(req.session.counter, "dis is req session count");
  // console.log(req, 'is req')
  if (!SID || !TOKEN) {
    return res.json({ message: "need Twilio SID and Twilio Token" });
  }

  let client = require("twilio")(SID, TOKEN);

  console.log(req.body, "this is in server");
  //creating new message to send to client
  client.messages
    .create({
      to: "+1" + req.body.recipient,
      from: SENDER,
      body: req.body.message
      // statusCallback: `http://${PORT}/client/home`
    })
    .then(message => {
      // if (smsCount > 0) {
      //   msg = message + (smsCount + 1);
      // }
      const twiml = new MessagingResponse();
      // console.log(req.session.counter);
      // req.session.counter = smsCount + 1;
      //tracking currently sent message + old messages
      twiml.message(msg);

      // res.writeHead(200, {'Content-Type': 'text/xml'});
      // res.write(twiml.toString())
      // console.log(req.session.counter);
    })
    .then(message => console.log(message, "message sid"))
    .done();
});

//processing call
app.post("/api/call", (req, res) => {
  if (!SID || !TOKEN) {
    return res.json({ message: "need Twilio SID and Twilio Token" });
  }

  let client = require("twilio")(SID, TOKEN);

  client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+1" + req.body.recipient,
    from: SENDER
  });
});

//push notifs

let subscription;
let pushIntervalID;
const testData = {
  body: "you're interested!",
  icon: "../src/styles/static/ocs_cropped.jpg"
};

app.post("api/notifs", (req, res, next) => {
  console.log("in notifs route");
  subscription = req.body;
  console.log(subscription);
  res.sendStatuc(201);
  pushIntervalID = setInterval(() => {
    webpush
      .sendNotification(subscription, JSON.stringify(testData))
      .catch(() => clearInterval(pushIntervalID));
  }, 3000);
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
