exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("care_providers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("care_providers").insert([
        {
          first_name: "James",
          last_name: "Jenkins",
          phone: "(808)-000-8000",
          email: "jjenkins@yahoo.com",
          location: "Honolulu",
          type: "Therapist",
          specialties: "Depression, ADHD, Anxiety",
          insurance: "HMSA, HMSS, AETNA",
          password: "jenkins"
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          location: "",
          type: "",
          specialties: "",
          insurance: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          location: "",
          type: "",
          specialties: "",
          insurance: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          location: "",
          type: "",
          specialties: "",
          insurance: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          location: "",
          type: "",
          specialties: "",
          insurance: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          location: "",
          type: "",
          specialties: "",
          insurance: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          location: "",
          type: "",
          specialties: "",
          insurance: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          location: "",
          type: "",
          specialties: "",
          insurance: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          location: "",
          type: "",
          specialties: "",
          insurance: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          location: "",
          type: "",
          specialties: "",
          insurance: "",
          password: ""
        },
        {
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          location: "",
          type: "",
          specialties: "",
          insurance: "",
          password: ""
        }
      ]);
    });
};
