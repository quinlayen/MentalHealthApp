const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var AccessToken = require('twilio').jwt.AccessToken;
var Twilio;
// const routes = require("./routes");

const PORT = process.env.PORT || 8080;
const providersRoute = require('./routes/care_providers.js');
// const authRoute = require("./routes/auth.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', providersRoute);
app.post('/sendText', (req, res) => {
  console.log(req);
});
// app.get("/", (req, res) => {
//   console.log("sanity check");
//   return res.json("hewwwwwwo");
// });

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
