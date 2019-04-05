const chai = require("chai");
const chaiHttp = require("chai-http");
// var server = require("../server");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Users= require("../models/User")

var assert = require('assert');
// Setting up the chai http plugin
chai.use(chaiHttp);





describe("GET /", function() {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the d
    before (function(done){
        mongoose.connect('mongodb://localhost/pokemons'); 
        mongoose.connection
    .once('open', () => {
        console.log('Connected!')
    })
    .on('error', (error) => {
        console.warn('Error : ',error);
    });
    done();
    })

    beforeEach((done) => {
        
        mongoose.connection.collections.users.drop(() => {
             //this function runs after the drop is completed
            }); 
            Users.create({name:"Houston",email:"houston@yahoo.com",password:"password"})
            done(); //go ahead everything is done now.
    });

    it("Should get data from the database", (done) => {
       Users.find({name:"Houston"},(err,name)=>{
           if(err){throw err;}
           if(name.lenth === 0){throw new Error ("No data");}
           done();
       })
    })

});  

// describe("Login Test", function() {
//     // Before each test begins, create a new request server for testing
//     // & delete all examples from the db
//     beforeEach((done) => {
//         mongoose.connection.collections.Users.drop(() => {
//              //this function runs after the drop is completed
//             done(); //go ahead everything is done now.
//         }); 
//     });

//     it("", (done) => {
        
//     })

// });  

// describe("Register /", function() {
//     // Before each test begins, create a new request server for testing
//     // & delete all examples from the db
//     beforeEach((done) => {
//         mongoose.connection.collections.Users.drop(() => {
//              //this function runs after the drop is completed
//             done(); //go ahead everything is done now.
//         }); 
//     });

//     it('', (done) => {
        
//     })

// });  