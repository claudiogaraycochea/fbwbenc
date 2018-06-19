'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const officeSchema = new Schema({
    msa: { type: String, required: true },
    office: { type: String, required: true },
    zipCode: { type: String, required: true },
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
});

const officeModel = mongoose.model('office', officeSchema);

module.exports = officeModel;