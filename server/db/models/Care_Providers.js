const bookshelf = require("./bookshelf");

const Care_Providers = bookshelf.Model.extend({
  tableName: "care_providers",
  idAttribute: "provider_id",
  hasTimestamps: true
});

module.exports = Care_Providers;
