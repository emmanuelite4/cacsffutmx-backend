var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UpcomingEventSchema = new Schema({
    name: String,
    description: String,
    created_at: Date
});

var UpcomingEvent = mongoose.model("UpcomingEvent", UpcomingEventSchema);

module.exports = UpcomingEvent;
