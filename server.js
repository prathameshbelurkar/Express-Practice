const dotenv = require('dotenv');

// Accessing ENV variables
dotenv.config({ path: './config.env' });

// Importing app file
const app = require('./app');

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
