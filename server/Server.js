const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const r_packages = require("./routes/r_packages");
const destinations = require("./routes/destinations");
const signup = require("./routes/signup");
const login = require("./routes/login");
const payment = require("./routes/payment");
const user = require("./routes/users")
const adminlogin = require("./routes/AdminLogin")
const registerasadmin = require("./routes/registerasadmin")
const messages = require("./routes/messages")
const cors = require("cors")

// DB config
const db = require("./config/keys").mongoURI;

// Body parser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// usig cors
app.use(cors());

// connecting to the database
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to database..."))
  .catch((error) => {
    console.log(error, "Error while connecting to database");
  });

// using packages routes
app.use("/r_packages", r_packages);

// using signup routes
app.use("/signup",signup);

// using signup routes
app.use("/-login",login);
 
 
// using Destinations routes
app.use("/destinations", destinations);

// payment route
app.use("/create-checkout-session", payment)

//users routes
app.use("/users", user)

// Register as Admin
app.use('/registerasadmin', registerasadmin)

//admin login
app.use("/login", adminlogin)

// Messages
app.use("/-message", messages)
// port
port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
