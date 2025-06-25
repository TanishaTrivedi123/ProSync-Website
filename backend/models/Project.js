const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProjectModel = mongoose.model("Project", projectSchema);
module.exports = ProjectModel;
