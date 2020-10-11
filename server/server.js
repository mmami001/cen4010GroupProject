const express = require('express');
const userRoutes = require('./routes/usersRoutes.js');
const booksRoutes = require('./routes/booksRoutes.js');
const shopCartRoutes = require('./routes/shopCartRoutes.js');
const reviewRoutes = require('./routes/reviewsRoutes')
const savedLaterRoutes = require('./routes/savedForLaterRoutes.js');
const logger = require('morgan');

const app = express();

app.use(express.json());
const bodyParser = require('body-parser');
//app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

//terminal logging
app.use(logger('combined'));

//route imports
app.use('/users', userRoutes);
app.use('/books', booksRoutes);
app.use('/shoppingCart', shopCartRoutes);
app.use('/reviews',reviewRoutes);
app.use('/savedForLater', savedLaterRoutes);

app.listen(process.env.PORT || '3000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
});
