'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const availableOpportunitySchema = new Schema({
  range: { type: String, required: true },
  need: { type: Boolean, required: true },
  global: { type: Boolean, required: true },
  national: { type: Boolean, required: true },
  local: { type: Boolean, required: true },
  dc: { type: Boolean, required: true },
  mia: { type: Boolean, required: true },
  atl: { type: Boolean, required: true },
  bos: { type: Boolean, required: true },
  nyc: { type: Boolean, required: true },
  chi: { type: Boolean, required: true },
  sea: { type: Boolean, required: true },
  atx: { type: Boolean, required: true },
  lax: { type: Boolean, required: true },
  mpk: { type: Boolean, required: true },
  eag_dc: { type: Boolean, required: true },
  pnb_dc: { type: Boolean, required: true },
  frc_dc: { type: Boolean, required: true },
  alt_dc: { type: Boolean, required: true },
  nao_dc: { type: Boolean, required: true },
  vll_dc: { type: Boolean, required: true },
  rva_dc: { type: Boolean, required: true },
  ftw_dc: { type: Boolean, required: true },
  prn_dc: { type: Boolean, required: true },
  hna_dc: { type: Boolean, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const availableOpportunityModel = mongoose.model('available-opportunity', availableOpportunitySchema);

module.exports = availableOpportunityModel;
