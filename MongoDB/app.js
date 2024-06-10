require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flashMessages = require('connect-flash');
const helmet = require('helmet');
const path = require("path");
const route = require("./routes");
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/midleware');
const csrf = require('csurf');

// Connect to MongoDB
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.emit('OK');
  })
  .catch(e => console.log(e));

// Configure session options
const sessionOptions = session({
  secret: 'secret',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    httpOnly: true
  }
});
app.use(helmet())
app.use(sessionOptions);
app.use(flashMessages());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.resolve("./src/public")));
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");
app.use(csrf())
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(route);
app.on('OK', () => {
  app.listen(3000, () => {
    console.log("Access http://localhost:3000");
    console.log("Server running on port 3000");
  });
});
