var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamp = require('./../helpers/timestamp');

var StatisticsSchema = new Schema({
    duration : { type : Number },
    win : { type : Boolean },
    skin : { type : String }
});

StatisticsSchema.index({ "created" : -1});

StatisticsSchema.plugin(timestamp, { useVirtual: false });

module.exports = Message = mongoose.model('Statistics', StatisticsSchema);