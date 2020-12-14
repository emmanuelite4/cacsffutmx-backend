var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RoleSchema = new Schema({
  name: String
});

var Role = mongoose.model("Role", RoleSchema);

module.exports = Role;
