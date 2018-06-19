'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const evaluatedOpportunitySchema = new Schema({
    confirmationID: { type: String, required: true },
    formFullName: { type: String, required: true },
    formCompany: { type: String, required: true },
    formAddress: { type: String, required: true },
    formCity: { type: String, required: false },
    formZipCode: { type: String, required: true },
    formState: { type: String, required: true },
    categories: { type: Schema.Types.Mixed, required: true },
    officeData: { type: String, required: true },
    reach: { type: String, required: true },
    match: { type: Boolean, required: true },
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
});

const evaluatedOpportunityModel = mongoose.model('evaluated-opportunity', evaluatedOpportunitySchema);

module.exports = evaluatedOpportunityModel;
