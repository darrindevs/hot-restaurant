
//* Phase 1 
// * DONE Create a basic server using Express.JS
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// *DONE Create a few array variables that will hold the data

var tableList = [
    {
        customerID: "1",
        customerName: "John",
        customerEmail: "email@foo.com",
        phoneNumber: "555-555-5555"
    },
    {
        customerID: "2",
        customerName: "Darrin",
        customerEmail: "darrin@foo.com",
        phoneNumber: "555-555-5556"
    },
    {
        customerID: "3",
        customerName: "Jerry",
        customerEmail: "jerry@foo.com",
        phoneNumber: "555-555-5557"
    },
    {
        customerID: "4",
        customerName: "Bobby",
        customerEmail: "bobby@foo.com",
        phoneNumber: "555-555-5557"
    },
]

// * DONE Create a set of routes for displaying the HTML pages

// route for /home
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
//route for /tables
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

//route /reserve 
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });


// todo Create a set of routes for getting and posting table data
// reserved 
app.get("/api/tables", function(req, res) {
    return res.json(tableList);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(newReservation);
  });

// create waitlist  
app.post("/api/tables/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    tableList.push(newReservation);
  
    res.json(newReservation);
  });

// show waitlist  

  // todo  Use jQuery to run AJAX calls or Raw JS Fetch to GET and POST data from users to the Express server

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  