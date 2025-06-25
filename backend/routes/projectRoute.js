const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const ProjectModel = require("../models/Project");

// POST /addproject
router.post("/addproject", upload.single("image"), async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file;

    console.log("REQ BODY:", req.body);
    console.log("REQ FILE:", req.file);

    // Check for missing fields
    if (!name || !description || !image || !image.path || !image.filename) {
      return res.status(400).json({
        error: "All fields are required and image must be uploaded properly",
      });
    }

    const newProject = new ProjectModel({
      image: {
        url: image.path,
        filename: image.filename,
      },
      name,
      description,
    });

    await newProject.save();

    res.status(201).json({
      message: "Project added successfully",
      project: newProject,
      success: true,
    });
  } catch (error) {
    console.error("Project upload failed:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /getprojects
router.get("/getprojects", async (req, res) => {
  try {
    const projects = await ProjectModel.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, projects });
  } catch (error) {
    console.error("Fetching projects failed:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

module.exports = router;
