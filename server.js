const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Accessing ENV variables
dotenv.config({ path: './config.env' });

// Getting connect link from env variables
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

/*
Connecting to mongodb via mongoose: returns a Promise
Remember 📝
when connecting to local mongodb database use ```.connect(process.env.DATABASE_LOCAL)
*/
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB Connection successful!'));

// Importing app file
const app = require('./app');

// Creating Schema using mongoose
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

// Creating a model from schema
const Tour = mongoose.model('Tour', tourSchema);

// _________________________________________ START SERVER ___________________________________________
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

/////////////////////////////

/*
app.get('env')
- will return a env variable
*/
