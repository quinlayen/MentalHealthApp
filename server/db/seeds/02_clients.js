exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("clients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("clients").insert([
        {
          first_name: "",
          last_name: "",
          phone: "",
          username: "",
          location: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          email: "",
          location: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          email: "",
          location: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          email: "",
          location: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          username: "",
          location: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          username: "",
          location: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          email: "",
          location: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          username: "",
          location: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          username: "",
          location: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          email: "",
          location: "",
          password: ""
        }
      ]);
    });
};
