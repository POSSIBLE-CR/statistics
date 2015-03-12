var express = require('express');
var api = express.Router();
var statisticsService = require('./../services/statistics');

api.post('/track', function(req, res, next) {
    statisticsService.track(req,res,next);
});

module.exports.api = api;