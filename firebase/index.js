const admin = require("firebase-admin");

const serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://saturdayuni-authentication-app-default-rtdb.firebaseio.com",
});

module.exports = admin;
