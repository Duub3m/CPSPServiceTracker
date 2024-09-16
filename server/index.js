const express = require('express');
const cors = require('cors'); // Importing the cors module
const app = express();

app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Middleware to enable CORS

// Starting the server
app.listen(9000, () => {
  console.log(`Server Started at ${9000}`);
});
