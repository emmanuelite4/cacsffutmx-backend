var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenerationMemberSchema = new Schema({
  generation_id: { type: Schema.Types.ObjectId, ref: "Generation" },
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

var GenerationMember = mongoose.model(
  "GenerationMember",
  GenerationMemberSchema
);

module.exports = GenerationMember;
