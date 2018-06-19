//const jwt = require('express-jwt');
const healthCheckRoutes = require('./health-check');
const wbencServiceRoutes = require('./wbenc-services');


module.exports = function (app) {
    // app.use(jwt({ secret: Buffer.from(process.env.SHARED_SECRET, 'base64') })
    //     .unless({ path: ['/health', '/alive', '/login'] }));

    app.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError'){
            res.status(401).send('invalid token user api...');
        }
    });

    healthCheckRoutes(app);
    wbencServiceRoutes(app);
    // candidateRoutes(app);
};
