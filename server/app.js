const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');

const logger = require('morgan');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const mount = require('mount-routes');

const expressControllers = require('express-controller');


// express-controller
const app = express();



// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var router = express.Router();

app.use(router);

//Tell expressControllers to use the controllers-directory, and use bind() to set up routing.
expressControllers
    .setDirectory( __dirname + '/controllers')
    .bind(router);

expressControllers.setDirectory(
    __dirname + '/controllers'
).bind(router);
// mount(app,  __dirname + '/routes');

app.use(history());
app.use(express.static(path.join(__dirname, './dist')));
app.use('/public', express.static(path.join(__dirname, './public')));
app.use(favicon(path.join(__dirname, './public/favicon-20170816034610179.ico')));



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

// const server = app.listen(3000,() => {
//     const host = server.address().address;
//     const port = server.address().port;
//     console.log('server listening at http://%s:%s', host, port);
// });

module.exports = app;