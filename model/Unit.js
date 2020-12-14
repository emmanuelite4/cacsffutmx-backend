var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UnitSchema = new Schema({
  name: String
});

var Unit = mongoose.model("Unit", UnitSchema);

module.exports = Unit;
