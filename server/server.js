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

const MessagingResponse = require('twilio').twiml.MessagingResponse;



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
  )
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

// app.use(twilioNotifications.notifyOnError)

// app.get("/", (req, res) => {
//   console.log(req.body);
//   console.log("sanity check");
//   return res.json("hewwwwwwo");
// });

  let SID = process.env.TWILIO_API_KEY;
  let TOKEN = process.env.TWILIO_AUTH_TOKEN;
  let SENDER = process.env.TWILIO_SMS_NUMBER;
  let SERVICE = process.env.TWILIO_SERVICE_SID;

//processing sms
app.post("/api/sms", (req, res) => {
console.log("Main req")

 const smsCount = req.session.counter || 0;
  console.log(req.session.counter, 'dis is req session count')
  // console.log(req, 'is req')
  if (!SID || !TOKEN) {
    return res.json({ message: "need Twilio SID and Twilio Token" });
  }
    let client = require("twilio")(SID, TOKEN);

console.log(req.body, "this is in server")
//creating new message to send to client
    client.messages
      .create(
        {
          to: '+1' + req.body.recipient,
          from: SENDER,
          body: req.body.message,
          // statusCallback: `http://${PORT}/client/home`
        }).then(message => {
          if (smsCount > 0) {
            msg = message + (smsCount + 1)
           
          }
          const twiml = new MessagingResponse();
          console.log(req.session.counter)
          req.session.counter = smsCount + 1;
        //tracking currently sent message + old messages 
          twiml.message(msg);

          // res.writeHead(200, {'Content-Type': 'text/xml'});
          // res.write(twiml.toString())
          console.log(req.session.counter);
         return req.session.counter
        })
         // .then(message => console.log(message, 'message sid'))
       // .done();


//storing recipient's numbers
// let identity = 0000001
//         client.notify.services(SERVICE).bindings.create({
//           identity: '0000001',
//           bindingType: 'sms',
//           address: '+1' + req.body.recipient,
//         }).then(binding => {
        
//           console.log(binding.sid, 'binding sid')
//           console.log("new identity", identity)
      
//           }).done()

//adding push notifications
// client.notify.services(SERVICE).notifications.create({
//   body: "New SMS" + req.body.message,
//   toBinding: {
//     binding_type: 'sms',
//     address: '+1' + req.body.recipient,
//   },
//   identity: ['identity']
// }).then(notification => console.log(notification, 'is notification')).done();


  

  
  
});

//app.use(bundler.middleware());

//processing call
app.post("/api/call", (req,res) => {
    if (!SID || !TOKEN) {
    return res.json({ message: "need Twilio SID and Twilio Token" });
  }
  let client = require("twilio")(SID, TOKEN);

  client.calls.create({
    url:'http://demo.twilio.com/docs/voice.xml',
    to:'+1' + req.body.recipient,
    from: SENDER
  }).then(call => console.log(call.sid)).done()
})

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
