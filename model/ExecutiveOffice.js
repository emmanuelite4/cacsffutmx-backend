var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExecutiveOfficeSchema = new Schema({
  title: String,
  order: Number,
  personnel: { type: Schema.Types.ObjectId, ref: "ExecutivePersonnel" }
});

var ExecutiveOffice = mongoose.model("ExecutiveOffice", ExecutiveOfficeSchema);

module.exports = ExecutiveOffice;
// module.exports = graphqlSchema;
