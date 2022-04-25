const Tour = require('./../models/tourModel');

// ________________________ HANDLING FUNCTIONS TO PERFORM CRUD OPERATIONS ___________________________

// GET: all tours
exports.getAllTours = (req, res) => {
  // console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedTime: req.requestTime,
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

// GET: specific related to id
exports.getTour = (req, res) => {
  // console.log(req.params);
  const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

// POST
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: 'Invalid data sent!',
    });
  }
};

// PATCH
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

// DELETE
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
