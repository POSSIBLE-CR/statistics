/**
 * Handle the statistics endpoints
 * @module services/statistics
 */

var Statistics = require('./../models/statistics');
var async = require('async');

/***
 * Parse the request and save the message on the DB
 * @param req {object} Express req
 * @param res {object} Express res
 * @param next {object} Express next
 */
module.exports.track = function(req, res, next) {
    var statistics = new Statistics();
    if (req.body) {
        if (req.body.win)
            statistics.win = req.body.win;
        if (req.body.duration)
            statistics.duration = req.body.duration;
        if (req.body.skin)
            statistics.skin = req.body.skin;
    }
    statistics.save(function (error, result, numberAffected) {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            res.status(201).json(result);
        }
    });
};