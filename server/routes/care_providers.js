const express = require("express");
const router = express.Router();
const Care_Provider = require("../db/models/Care_Provider.js");

// gets all the docs from the database //
router.get("/", (req, res) => {
  console.log("/doctors route hit");
  return Care_Provider.fetchAll()
    .then(result => {
      console.log("ALL DOCS", result);
      return res.json(result);
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

//get docs by type & location//
router.post("/", (req, res) => {
  console.log("doc post made", req.body);
  return Care_Provider.where({
    type: req.body.type,
    location: req.body.location
  })
    .orderBy("last_name", "asc")
    .fetchAll()
    .then(result => {
      console.log("ALL DOCS by type & location", result);
      return res.json(result);
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

// gets details of specific doc //
router.get("/:id", (req, res) => {
  const provider_id = req.params.id;
  console.log("get this doc's details", provider_id);
  return Care_Provider.where({ provider_id })
    .fetch()
    .then(result => {
      return res.json(result);
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

module.exports = router;
