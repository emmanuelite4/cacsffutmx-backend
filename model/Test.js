var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TestSchema = new Schema({
    title: String,
    content: String,
    created_at: Date
});

var Test = mongoose.model("Test", TestSchema);

module.exports = Test;
