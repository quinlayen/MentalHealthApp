const express = require("express");
const router = express.Router();
const Care_Provider = require("../db/models/Care_Provider.js");

router.route("/").get((req, res) => {
  return Care_Provider.where({ location })
    .fetch()
    .then(result => {
      console.log("ALL THEM DOCS in yo location", result);
      return res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  console.log("get doc details", id);
  return Care_Provider.where({ provider_id })
    .fetch()
    .then(result => {
      console.log("THIS doc", result);
      return res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
