var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  // last_name: String,
  email: String,
  password: String,
  gender: String,
  phone_number: String,
  // level: Number,
  department: String,
  executive: { type: Schema.Types.ObjectId, ref: "ExecutivePersonnel" },
  generation: { type: Schema.Types.ObjectId, ref: "GenerationMember" },
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
// module.exports = graphqlSchema;
