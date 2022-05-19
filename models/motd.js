const mongoose = require("mongoose");

const MotdSchema = new mongoose.Schema({
  text: {
    type: String,
  },
});

module.exports = mongoose.model("motd", MotdSchema);
