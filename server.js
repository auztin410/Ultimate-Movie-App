const express = require("express");
const morgan = require("morgan");
const session = require('express-session');
const dbConnection = require('./index');
const MongoStore = require('connect-mongo')(session)
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('./passport');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/user");



// MIDDLEWARE
app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// Serve up static assets (usually on Heroku.)
// =============================================
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
);

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

  // Using routes
// =============
app.use(routes);

app/use("/user", user);



// Connecting to the weirdbd database via mongoose.
// =================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ultimatemovieapp");

app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });