const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');

const logger = require('morgan');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/test',(req,res) => {
    res.send('hello express!')
});

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });


app.use(history());
app.use(express.static(path.join(__dirname, './server/dist')));
app.use('/static', express.static(path.join(__dirname, './server/static')));
app.use(favicon(path.join(__dirname, './server/static/favicon-20170816034610179.ico')));

const server = app.listen(3000,() => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('server listening at http://%s:%s', host, port);
});