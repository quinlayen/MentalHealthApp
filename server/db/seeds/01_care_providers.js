exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("care_providers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("care_providers").insert([
        {
          first_name: "John",
          last_name: "Seed",
          phone: "808-382-7133",
          email: "jseed@yahoo.com",
          location: "Honolulu",
          type: "Therapist",
          specialties: "ADHD, depression",
          insurance: "HMSA"
        },
        {
          first_name: "James",
          last_name: "Duncan",
          phone: "808-333-3333",
          email: "jdd@yahoo.com",
          location: "Kailua",
          type: "Psychiatrist",
          specialties: "anxiety, depression",
          insurance: "Aetna"
        },
        {
          first_name: "Hamilton",
          last_name: "Sons",
          phone: "808-222-0000",
          email: "hams@yahoo.com",
          location: "Honolulu",
          type: "Therapist",
          specialties: "PTSD, ADHD",
          insurance: "HMSA"
        },
        {
          first_name: "Kathryn",
          last_name: "Egan",
          phone: "8087832288",
          location: "Honolulu",
          type: "Therapist",
          specialties: "Child & Adolescent Psychiatry",
          insurance: ["Aetna", "Cigna", "Healthnet", "Medicare", "Medicaid"],
          bio:
            "Dr. Kathryn Egan, MD--specialist in psychiatry--currently treats patients in Honolulu, Hawaii. Dr. Egan is licensed to practice medicine at Hawaii. In addition to having active medical licenses, Dr. Egan has been found during an automated background check to be clear of any malpractice history and holds one or more active medical licenses."
        }
      ]);
    });
};
