var passport = require('passport');
var appUtils = require('../../utils/appUtils');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var registerFn = function(req, res, next) {
    if (!req.body.name || !req.body.email || !req.body.password) {
        appUtils.errorHandler(res, "Invalid user input", "All fields required", 400);
        return;
    }

    var user = new User();

    user.name = req.body.name;
    user.email = req.body.email;

    user.setPassword(req.body.password);

    user.save(function(err) {
        var token;
        if (err) {
            appUtils.errorHandler(res, err.message, 'Failed to register.');
        } else {
            token = user.generateJwt(req, res, next);
            appUtils.successHandler(res, 200, {
                "token": token
            });
        }
    });
};

var loginFn = function(req, res, next) {
    if (!req.body.email || !req.body.password) {
        appUtils.errorHandler(res, "Invalid user input", "All fields required", 400);
        return;
    }

    passport.authenticate('local', function(err, user, info) {
        var token;

        if (err) {
            appUtils.errorHandler(res, err.message, 'Failed to login.');
            return;
        }

        if (user) {
            token = user.generateJwt(req, res, next);
            appUtils.successHandler(res, 200, {
                "token": token
            });
        } else {
            appUtils.errorHandler(res, info, 'Failed to login.', 401);
        }
    })(req, res);
};


module.exports = {
    register: registerFn,
    login: loginFn
};
