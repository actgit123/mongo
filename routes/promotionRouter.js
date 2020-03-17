const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotionalcampsites to you');
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotionalcampsites');
});


promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the promotionalcampsite: ${req.params.promotionId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /promotionalcampsites/${req.params.promotionId}`);
})
.put((req, res) => {
    
    res.write(`Updating the promotionalcampsite: ${req.params.promotionId}\n`);
    res.end(`Will update the promotionalcampsite: ${req.body.name}
         with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting promotionalcampsite: ${req.params.promotionId}`);
});

module.exports = promotionRouter;