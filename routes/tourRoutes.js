const express = require('express');
const tourController = require('./../controllers/tourController');

// Creating new router to manage tours
const router = express.Router();

// Params middleware (Only calls when certain parameters are present in route)
// router.param('id', tourController.checkID);

/*
Create the checkBody middleware function
- check if the body contains the name and price property
- If not, send back 400 status code (bad request)
- Add it to post handler stack

router.post(middleware, tourController.createTour); // is a example of chaining the middleware. bcoz first the middleeare will be called and then the tourController.createTour
*/

// Listening to all  CRUD opertions: for Tours
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

// Exporting Tour router
module.exports = router;
