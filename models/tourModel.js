const mongoose = require('mongoose');
const slugify = require('slugify');

// Creating Schema using mongoose
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size'],
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty'],
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
    },
    // discount: {
    //   priceDiscount: Number,
    //   summary: {
    //     type: String,
    //     trim: true,
    //     required: [true, 'A tour must have a description'],
    //   },
    // },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual Properties: Duration Weeks
tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

// Document Middleware(pre): runs before .save() and .create() only methods in Db
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

/*
// Document Middleware(pre save hook): runs before .save() and .create() in Db
tourSchema.pre('save', function (next) {
  console.log('Will save document...');
  next();
});

// Document Middleware(post): runs after .save() and .create() in Db
tourSchema.post('save', function (doc, next) {
  console.log(doc);
  next();
});
*/

// Query Middleware(pre): find
tourSchema.pre(/^find/, function (next) {
  // tourSchema.pre('find', function (next) {
  this.find({ secretTour: { $ne: true } });

  this.start = Date.now();
  next();
});

// Query Middleware(post): find
tourSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  console.log(docs);
  next();
});

// Query Middleware: findOne
// tourSchema.pre('find', function (next) {
//   this.find({ secretTour: { $ne: true } });
//   next();
// });

// Creating a model from schema
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
