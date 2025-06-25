const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const ClientModel = require("../models/Client");

router.post("/addclient", upload.single("image"), async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    const image = req.file;

    if (!name || !description || !designation || !image) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newClient = new ClientModel({
      image: {
        url: image.path,
        filename: image.filename,
      },
      name,
      description,
      designation,
    });

    await newClient.save();

    res.status(201).json({
      message: "Client added successfully",
      client: newClient, // ✅ fixed key
      success: true,
    });
  } catch (error) {
    console.error("Client upload failed:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/getclients", async (req, res) => {
  try {
    const clients = await ClientModel.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, clients });
  } catch (error) {
    console.error("Fetching clients failed:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

module.exports = router;
