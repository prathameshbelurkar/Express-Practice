const express = require('express');
const userController = require('./../controllers/userController');

// Creating new router to manage users
const router = express.Router();

// Listening to all  CRUD opertions on route: for Users
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

// Exporting User router
module.exports = router;

/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// _______________________ Old Method ___________________________________________
app.get('/api/v1/tours', getAllTours);
app.get('/api/v1/tours/:id', getTour);
app.post('/api/v1/tours', createTour);
app.patch('/api/v1/tours/:id', updateTour);
app.delete('/api/v1/tours/:id', deleteTour);
// _____________________________________________________________________________
*/
