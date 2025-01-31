const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // This will throw an error if the value of req.query.num is not a number
    const result = parseInt(req.query.num) * 2; 
    res.send(`The result is: ${result}`);
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));