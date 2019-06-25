const admin     = require('firebase-admin');

// admin.initializeApp();
const serviceAccount = require("../socialapre-firebase-adminsdk-em0ir-a7aa0fcba1.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialapre.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
