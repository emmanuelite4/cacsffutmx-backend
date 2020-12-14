var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
  theme: String,
  vision: String,
  mission: String,
  year: Number,
  active: Boolean,
});

var Session = mongoose.model("Session", SessionSchema);

module.exports = Session;
