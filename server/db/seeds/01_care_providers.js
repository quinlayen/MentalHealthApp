const care_providersData = require("../data/care_providersData.js");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("care_providers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("care_providers").insert(care_providersData);
    });
};
