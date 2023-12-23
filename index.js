const express = require('express');
const app = express();
const urlRoute = require('./routes/url');
const shortidRoute = require('./routes/shortid');
const connecttoDb = require('./connect');
const PORT = 8001;

app.use(express.json());

connecttoDb("mongodb://127.0.0.1:27017/short-url1")
    .then(() => console.log('Connected to MongoDB successfully'));

// Use the '/url' route for handling short URL generation (POST) and retrieval (GET)
app.use('/url', urlRoute);

// Use the '/:shortid' route for handling short URL redirection (GET)
app.use('/:shortid', shortidRoute);

app.listen(PORT, () => console.log(`Server is working at port ${PORT}`));
