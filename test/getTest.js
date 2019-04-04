const chai = require("chai");
const chaiHttp = require("chai-http");
// var server = require("../server");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// const Users= require("../models")

var assert = require('assert');
// Setting up the chai http plugin
chai.use(chaiHttp);





describe("GET /", function() {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach((done) => {
        mongoose.connection.collections.Users.drop(() => {
             //this function runs after the drop is completed
            done(); //go ahead everything is done now.
        }); 
    });

    it('', (done) => {
        
    })

});  

describe("Login Test", function() {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach((done) => {
        mongoose.connection.collections.Users.drop(() => {
             //this function runs after the drop is completed
            done(); //go ahead everything is done now.
        }); 
    });

    it('', (done) => {
        
    })

});  

describe("Register /", function() {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach((done) => {
        mongoose.connection.collections.Users.drop(() => {
             //this function runs after the drop is completed
            done(); //go ahead everything is done now.
        }); 
    });

    it('', (done) => {
        
    })

});  