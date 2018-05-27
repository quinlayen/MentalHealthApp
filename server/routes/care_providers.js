const express = require("express");
const router = express.Router();
const Care_Providers = require("../db/models/Care_Providers.js");

router.route("/").get((req, res) => {
  return Care_Providers.fetchAll()
    .then(result => {
      console.log("ALL THEM CARDS", result);
      return res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  console.log("get card by id", id);
  return Care_Providers.where({ provider_id })
    .fetch()
    .then(result => {
      console.log("THIS CARD", result);
      return res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
