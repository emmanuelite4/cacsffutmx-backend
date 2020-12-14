var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GenerationSchema = new Schema({
  name: String,
  current_level: Number,
  description: String,
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

var Generation = mongoose.model("Generation", GenerationSchema);

module.exports = Generation;
// module.exports = graphqlSchema;
