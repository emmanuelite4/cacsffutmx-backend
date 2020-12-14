var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UnitMemberSchema = new Schema({
  unit: { type: Schema.Types.ObjectId, ref: "Unit" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  // role: { type: Schema.Types.ObjectId, ref: "UnitMemberRole" }
  role: { type: Schema.Types.ObjectId, ref: "UnitMemberToRole" }
});

var UnitMember = mongoose.model("UnitMember", UnitMemberSchema);

module.exports = UnitMember;
