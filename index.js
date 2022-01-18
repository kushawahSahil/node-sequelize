const express = require('express');
const app = express();
const helmet = require("helmet");
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');


require('dotenv').config();

const bodyParser = require('body-parser');
const db = require('./app/dbConnection/db');

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/helpers/authPassport')(passport);

app.use('/', require('./app/routes/userRoute'));
app.use('/', require('./app/routes/addressBookRoute'));

const port = 8000;

app.use(require("./app/helpers/response"));
app.use(require("./app/helpers/error").handleJoiErrors);
app.use(require("./app/helpers/error").handleErrors);


app.use(session({ secret: 'melody hensley is my spirit animal' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('./app/services/upload'));

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});