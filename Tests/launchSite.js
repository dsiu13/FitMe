var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://localhost:8080/')
    // .wait('#regform')
    // .click('#regform')
    // .wait(5000)
    // .evaluate(function () {
    // return document.querySelector('#sign-up-button');
    // })
    // .end()
    .then(function() {
      console.log("Nightmare has ended")
    });