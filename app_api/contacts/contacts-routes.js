/**
 * @module      :: ContactsRouter
 * @description :: sepearte REST end poits
 * @path        :: /app_api/contacts/contacts-routes.js
 */

var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

var ContactsRouter = require('express').Router();
var contactCtrl = require('./controllers/contacts');

ContactsRouter.route('')
    .get(auth, contactCtrl.getContacts)
    .post(contactCtrl.addContact);
ContactsRouter.route('/:contact_id')
    .get(contactCtrl.getContact)
    .put(contactCtrl.updateContact)
    .delete(contactCtrl.deleteContact);

module.exports = ContactsRouter;
