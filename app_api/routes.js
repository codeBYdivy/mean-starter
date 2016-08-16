/**
 * @module      :: mainRouter
 * @description :: sepearte REST end points
 * @path        :: /app_api/routes.js
 */

module.exports = function(mainRouter) {
    require('./auth/auth-routes')(mainRouter);
    mainRouter.use('/contacts', require('./contacts/contacts-routes'));
}
