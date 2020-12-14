var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UnitMemberRoleSchema = new Schema({
  name: String,
  unit: { type: Schema.Types.ObjectId, ref: "Unit" }
  // user: { type: Schema.Types.ObjectId, ref: "User" }
});

var UnitMemberRole = mongoose.model("UnitMemberRole", UnitMemberRoleSchema);

module.exports = UnitMemberRole;
