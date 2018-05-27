const bookshelf = require("./bookshelf");

const Clients = bookshelf.Model.extend({
  tableName: "clients",
  idAttribute: "client_id",
  hasTimestamps: true
});

module.exports = Clients;
