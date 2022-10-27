const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  category: { type: String},
  empId: { type: String },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }, });


module.exports = mongoose.model("Post", postSchema);

