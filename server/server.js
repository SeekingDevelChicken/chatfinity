const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');
const commentRouter = require('./routes/comments');
const authController = require('./controllers/authController');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/auth', authRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentRouter);

app.get('/secret', authController.verifyUser, (req, res) => {
  return res.status(200).json('here is some secret info!');
});

//Need to have the index page not be contingent on production vs dev
app.use('/build', express.static(path.join(__dirname, '../build/')));
app.get('/', (req, res) =>
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
  );


app.get('*', (req, res) => {
  return res.status(404).json();
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: 'An error occurred',
  };
  const error = { ...defaultErr, ...err };
  return res.status(error.status).json(error.message);
});

app.listen(3000);

module.exports = app;
