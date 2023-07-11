const express = require('express');
const router = require('./routes/routes.js');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { authentication } = require('./middlewares/authenticationMiddleware.js');
const { DB_NAME } = require('./constants.js');

// TODO: Change DB name based on exam name
mongoose.set('strictQuery', false); // For older versions
mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`);


app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authentication);
app.use(router);

app.listen(3000, () => {
    console.log('Server listening on port 3000...');
});