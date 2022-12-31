const functions = require("firebase-functions");
const express = require("express");
// const cors = require("cors");

const admin = require("firebase-admin");
admin.initializeApp();

const app = express();

app.get("/", (req, res) => {});

app.post("/", (req, res) => {
  const user = req.body;

  admin.firestore().collection("people").add(user);

  res.status(201).send({message: "User created successfully!"});
});

exports.user = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
