const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobilenum: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Automatically adds current date when new contact is saved
  },
});

const ContactModel = mongoose.model("Contact", contactSchema);

module.exports = ContactModel;
