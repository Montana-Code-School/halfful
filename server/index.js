const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');

require('./server/models').connect(config.dbUri);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.set('port', (process.env.PORT || 3002));

app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});
