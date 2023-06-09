const { Schema, model, Types } = require("../connection");

const schema = new Schema({
  user: { type: Types.ObjectId, ref: "user" },
  extensionData: { type: Object, required: true },
  title: String,
  zipfile: { type: String },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("extension", schema);
