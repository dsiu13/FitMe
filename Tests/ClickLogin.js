var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });

var Nightmare = require('nightmare');    
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://localhost:8080/')
    .wait('#loginform')
    .click('#loginform')
    .wait(5000)
    .evaluate(function () {
    return document.querySelector('#submit-btn');
    })
    .end()
    .then(function() {
      console.log("Nightmare has ended")
    });