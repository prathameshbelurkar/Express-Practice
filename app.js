// _______________________________________ IMPORTING MODULES ______________________________________
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

// Creating instance of express.
const app = express();

// ___________________________________________ MIDDLEWARE _________________________________________

// Third-party middleware
app.use(morgan('dev'));

// Including middleware for res.body to access
app.use(express.json());

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

// Getting tours obj
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//_______________________________________ CRUD OPERATIONS _____________________________________________

// GET: all tours
const getAllTours = (req, res) => {
  // console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedTime: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

// GET: specific related to id
const getTour = (req, res) => {
  // console.log(req.params);
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  // if (id > tours.length) {
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

// POST
const createTour = (req, res) => {
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

// PATCH
const updateTour = (req, res) => {
  // if (!tour) {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

// DELETE
const deleteTour = (req, res) => {
  // if (!tour) {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
//______________________________ PERFORMING CRUD OPERATIONS & ROUTE HANDLERS _________________________

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.route('/api/v1/tours').get(getAllTours).post(createTour);

app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

// _________________________________________ START SERVER ___________________________________________
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
