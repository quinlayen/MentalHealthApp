const bookshelf = require("./bookshelf");

const Client = bookshelf.Model.extend({
  tableName: "clients",
  idAttribute: "client_id",
  hasTimestamps: true
});

module.exports = Client;
