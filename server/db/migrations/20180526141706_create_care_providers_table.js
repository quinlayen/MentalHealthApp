exports.up = function(knex, Promise) {
  return knex.schema.createTable("care_providers", function(table) {
    table.increments("provider_id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("phone").notNullable();
    table.string("email").notNullable();
    table.string("location").notNullable();
    table.string("type").notNullable();
    table.text("specialties").notNullable();
    table.text("insurance").notNullable();
    table.string("password").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("care_providers");
};
