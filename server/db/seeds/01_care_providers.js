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
          phone: "8083827133",
          email: "jseed@yahoo.com",
          location: "Honolulu",
          type: "Therapist",
          specialties: "ADHD, depression",
          insurance: "HMSA",
          bio: "things things things things",
          image:
            "https://stockphoto.com/samples/NjA0NjU5MDUxMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/businesswoman-with-female-colleague-at-office.jpg&size=1024"
        },
        {
          first_name: "James",
          last_name: "Duncan",
          phone: "8083333333",
          email: "jdd@yahoo.com",
          location: "Honolulu",
          type: "Psychiatrist",
          specialties: "anxiety, depression",
          insurance: "Aetna",
          bio: "joaijdoiwjdlldq",
          image:
            "https://stockphoto.com/samples/OTkzOTY5MzYwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/smiling-business-people.jpg&size=1024"
        },
        {
          first_name: "Hamilton",
          last_name: "Sons",
          phone: "8082220000",
          email: "hams@yahoo.com",
          location: "Honolulu",
          type: "Therapist",
          specialties: "PTSD, ADHD",
          insurance: "HMSA",
          bio: "aasdhgjlakgoindlMDOEIMGOogmlsmv",
          image:
            "https://stockphoto.com/samples/OTY2MTU5MjcwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/face-of-beautiful-woman-on-the-background-of-business-people.jpg&size=1024"
        },
        {
          first_name: "Kathryn",
          last_name: "Egan",
          phone: "8087832288",
          email: "kegan@jojo.com",
          location: "Honolulu",
          type: "Therapist",
          specialties: "Child & Adolescent Psychiatry",
          insurance: "Aetna, Cigna, Healthnet, Medicare, Medicaid",
          bio:
            "Dr. Kathryn Egan, MD--specialist in psychiatry--currently treats patients in Honolulu, Hawaii. Dr. Egan is licensed to practice medicine at Hawaii. In addition to having active medical licenses, Dr. Egan has been found during an automated background check to be clear of any malpractice history and holds one or more active medical licenses.",
          image:
            "https://stockphoto.com/samples/MDk5MTMwODkxMDAxMWY1YmNmYjBlZA==/Mzk4NTFmNWJjZmIwZWQ=/handsome-young-businessman-in-eyeglasses-using-laptop-outside-modern-building-.jpg&size=1024"
        }
      ]);
    });
};
