# Mental Health App

This is our group's final project for graduation from DevLeague in June 2018.
This app was made as a search engine allowing users to search for therapists or psychiatrist in their local area.  We call the _Gooddoctor API_ which returned doctors broken up by area, and allows the users to select by insurance, location, and specialty.  After that, the difference between this app and others like it is the ability for the user to simply press a button and have the doctor reach out to the user.  When the user presses the Contact me button, the app uses the _Twilio API_ to send a ping to the doctor's computer, notifying the doctor of the user's request for contact, and how the user would like to be contacted.  This function takes the burden off of the user and makes it easier for them to seek the help they need.

## Tech

  ### Frontend
* React
* Redux
* Bootstrap 4

  ### Backend
* Node
* Express
* PostGreSQL
* Knex
* BookshelfJS
