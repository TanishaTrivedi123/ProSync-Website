const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  image: {
    url: String,
    filename: String,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ClientModel = mongoose.model("Client", ClientSchema); // ✅ fixed case
module.exports = ClientModel;
