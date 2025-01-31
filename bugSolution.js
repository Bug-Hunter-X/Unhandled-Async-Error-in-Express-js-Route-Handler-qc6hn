const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const result = parseInt(req.query.num) * 2;
      res.send(`The result is: ${result}`);
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).send('An error occurred while processing your request.');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));