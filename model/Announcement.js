var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AnnouncementSchema = new Schema({
    title: String,
    content: String,
    created_at: Date
});

var Announcement = mongoose.model("Announcement", AnnouncementSchema);

module.exports = Announcement;
