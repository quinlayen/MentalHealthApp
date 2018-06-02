const bookshelf = require("./bookshelf");

const Care_Provider = bookshelf.Model.extend({
  tableName: "care_providers",
  idAttribute: "provider_id",
  hasTimestamps: true
});

module.exports = Care_Provider;
