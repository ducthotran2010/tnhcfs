const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const secretKey = `6Ldy80YUAAAAALYOjB782-1eh-4ZXYRudF6vZznF`


const firebase = require("firebase");
require("firebase/firestore");
var config = {
   apiKey: "AIzaSyCwZslsY4a5cTz-ovDcomkS7WbQZxsV-lA",
   authDomain: "tnh-cfs.firebaseapp.com",
   databaseURL: "https://tnh-cfs.firebaseio.com",
   projectId: "tnh-cfs",
   storageBucket: "tnh-cfs.appspot.com",
   messagingSenderId: "516407411697"
};
var db = firebase.firestore(firebase.initializeApp(config));

app.prepare().then(() => {
   var server = express()
   server.use(bodyParser.json())
   server.use(bodyParser.urlencoded({extended : false}))
   server.post('/content',(req,res) => {
      if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
         return res.redirect('/error');
      }
      const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body['g-recaptcha-response']}&remoteip=${req.connection.remoteAddress}`
      request(verificationUrl, function(error, response, body) {
         body = JSON.parse(body)
         if(body.success !== undefined && !body.success) {
            return res.redirect('/error');
         }
         db.collection("Confessions").add({
            time: new Date(),
            content: encodeURIComponent(req.body['content'])
         })
         .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            return res.redirect('./done')
         })
         .catch(function(error) {
            console.error("Error adding document: ", error);
            return res.redirect('./error');
         })
      })
   })

   server.get('*' , (req, res) => {
      handle(req, res)
   })

   server.listen(port, (err) => {
      if (err) throw err
      console.log((new Date()).toString())
      console.log(`\x1b[42m%s\x1b[0m`,`> Ready on http://localhost:${port}`)
   })
})
