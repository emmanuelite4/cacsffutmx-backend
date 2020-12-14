var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    name: String,
    description: String,
    created_at: Date,
    date: Date
});

var Event = mongoose.model("Event", EventSchema);

module.exports = Event;
