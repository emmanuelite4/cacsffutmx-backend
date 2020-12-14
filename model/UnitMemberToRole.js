var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UnitMemberToRoleSchema = new Schema({
  name: String,
  role: { type: Schema.Types.ObjectId, ref: "UnitMemberRole" },
  unit: { type: Schema.Types.ObjectId, ref: "Unit" },
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

var UnitMemberToRole = mongoose.model(
  "UnitMemberToRole",
  UnitMemberToRoleSchema
);

module.exports = UnitMemberToRole;
