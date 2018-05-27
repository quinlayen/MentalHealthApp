const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const routes = require("./routes");

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/", routes);

app.get("/", (req, res) => {
  console.log("sanity check");
  return res.send("hewwwwwwo");
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
