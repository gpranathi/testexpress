
import express from 'express';

const app = express();
app.get('/', (req, res) => {
  console.log('r u u');
  res.send('hello world');
});
app.listen(8010, () => {
  // const port = app.address().port;
  console.log('hello');
  console.log('welcome to express');
});
