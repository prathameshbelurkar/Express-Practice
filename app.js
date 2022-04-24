const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// _________________________________ CREATING INSTANCE OF EXPRESS _________________________________
const app = express();

// ___________________________________________ MIDDLEWARE _________________________________________

// Third-party middleware
app.use(morgan('dev'));

// Including middleware for res.body to access
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

// Getting the time when request is made to the getallTours
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Our Custom Middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware 😀');
  next();
});

// Adding routers to the Middleware (called as mounting)
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);

// ___________________________________ EXPORTING APP (this module) ______________________________
module.exports = app;
