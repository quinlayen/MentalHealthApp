exports.up = function(knex, Promise) {
  return knex.schema.createTable("clients", function(table) {
    table.increments("client_id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("phone").unique();
    table.string("email").unique();
    table.string("password").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("clients");
};
