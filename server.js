const app = require('./app');

// _________________________________________ START SERVER ___________________________________________
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
