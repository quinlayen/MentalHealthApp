exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("clients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("clients").insert([
        { id: 1, colName: "rowValue1" },
        { id: 2, colName: "rowValue2" },
        { id: 3, colName: "rowValue3" }
      ]);
    });
};
