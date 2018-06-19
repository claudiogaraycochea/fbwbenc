'use strict';

const Promise = require('bluebird');
const OfficesManager = require('../services/offices-manager');
const AvailableOpportunitiesManager = require('../services/available-opportunities-manager');
const EvaluatedOpportunitiesManager = require('../services/evaluated-opportunities-manager');

module.exports = function (app) {

  app.post('/ingest-zipcodes', (req, res) => {
    console.log('Ingesting Zipcodes');
    // console.log('wbenc-services /ingest-zipcodes req.body:', req.body);
    OfficesManager.ingest(req.body);
    res.status(200).send({status: 'ok'});
  });

  app.post('/ingest-opportunities', (req, res) => {
    console.log('Ingesting Opportunities');
    // console.log('wbenc-services /ingest-opportunities req.body:', req.body);
    AvailableOpportunitiesManager.ingest(req.body);
    res.status(200).send({status: 'ok'});
  });

  app.get('/export-opportunities', async (req, res) => {
    console.log('Exporting opportunities');
    const exported = await EvaluatedOpportunitiesManager.export(res);
    console.log('Opportunities exported');
  });

  app.post('/evaluate-opportunity', async (req, res) => {
    console.log('Evaluating opportunity');
    // console.log('wbenc-services /evaluate-opportunity req.body:', req.body);
    const created = await EvaluatedOpportunitiesManager.evaluate(req.body);
    res.status(200).send({
      status: 'ok',
      match: created.match
    });
  });
};
