const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

dotenv.config({ path: './config/config.env' });

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/', require('./routes/index'));

app.engine(
    "hbs",
    exphbs.engine({
        extname: "hbs",
        defaultLayout: false,
        layoutsDir: "views/layouts/"
    })
);
app.set('view engine', '.hbs');

app.use('/public', express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

