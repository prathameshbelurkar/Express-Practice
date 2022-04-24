const express = require('express');
const tourController = require('./../controllers/tourController');

// Creating new router to manage tours
const router = express.Router();

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
