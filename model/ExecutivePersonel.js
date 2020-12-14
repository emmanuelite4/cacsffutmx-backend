var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExecutivePersonnelSchema = new Schema({
  year: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  office: { type: Schema.Types.ObjectId, ref: "ExecutiveOffice" }
});

var ExecutivePersonnel = mongoose.model(
  "ExecutivePersonnel",
  ExecutivePersonnelSchema
);

module.exports = ExecutivePersonnel;
// module.exports = graphqlSchema;
