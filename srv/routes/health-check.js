'use strict';

const Promise = require('bluebird');

async function alive(res) {
    res.status(200).send({
        'alive': true
    });

}

module.exports = function (app) {
    app.post('/alive', (req, res) => {
        alive(res);
    });

    app.get('/alive', (req, res) => {
        alive(res);
    });

    app.get('/health', (req, res) => {
        alive(res);
    });

    app.post('/health', (req, res) => {
        alive(res);
    });
}
