import express from 'express';
import bodyParser from 'body-parser';

import router from './routes/index';
//setup the express app
const app = new express();

// body parsers

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/todos', router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
