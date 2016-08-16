/**
 * @module      :: Contact
 * @description :: mongoose model
 * @path        :: /app_api/contacts/models/contacts.js
 */

var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    'firstName': String,
    'lastName': String,
    'email': String,
    'phone': {
        'mobile': String,
        'work': String
    },
    'twitterHandle': String,
    'address': String
});

mongoose.model('Contact', ContactSchema);
