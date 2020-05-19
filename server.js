// Dependencies
const express = require("express");
const morgan = require("morgan");

const mongoose = require("mongoose");
require('dotenv').config()

// Express set up
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

// Express handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Server listening
app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});
